import { Onedoc } from "@onedoc/client";
import { compile } from "@onedoc/react-print";
import { readFileSync, writeFileSync } from "fs";
import { Brochure } from "@/templates/Brochure";
import { CV } from "@/templates/CV";
import { Payroll } from "@/templates/Payroll";
import { join } from "path";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY as string);

export async function GET() {
  const { file, error } = await onedoc.render({
    html: await compile(Brochure()),
    test: false,
    assets: [
      {
        path: "./util/util.css",
        content: readFileSync(join(process.cwd(), "./util/util.css")).toString(),
      },
      {
          path: "image.png",
          content:readFileSync("image.png"),
      }
    ],
  });

  if (error) {
    throw error;
  }

  const pdfBuffer = Buffer.from(file);

  // Return the PDF
  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
