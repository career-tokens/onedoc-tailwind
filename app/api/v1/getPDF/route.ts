import { Onedoc } from "@onedoc/client";
import { compile } from "@onedoc/react-print";
import { readFileSync, writeFileSync } from "fs";
import { Brochure } from "@/community-templates/tree/main/templates/Brochure";
import { CV2 } from "@/community-templates/tree/main/templates/CV2";
import { CV } from "@/community-templates/tree/main/templates/CV";
import { Payroll } from "@/community-templates/tree/main/templates/Payroll";
import { join } from "path";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY as string);

export async function GET() {
  const { file, error } = await onedoc.render({
    html: await compile(CV2()),
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
