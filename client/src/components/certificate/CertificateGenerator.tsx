import { useCallback, useRef, useState } from "react";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const WIDTH = 1000;
const HEIGHT = 700;

const COLORS = {
  bgOuter: "#0A1128",
  bgInner: "#FBF8F1",
  tabBg: "#DCDCDC",
  tabBorder: "#B0B0B0",
  textDark: "#172033",
  textMuted: "#5F6877",
  gold: "#C8A96E",
  goldDark: "#8C6F3E",
  white: "#FFFFFF",
};

// Font Families matching template design
const CONDENSED_FONT = "'Cinzel', 'Trajan Pro', 'Oswald', serif";
const SCRIPT_FONT = "'Cormorant Garamond', 'EB Garamond', Georgia, serif";
const BODY_FONT = "'Montserrat', 'Helvetica Neue', sans-serif";


function formatCertificateDate(iso?: string): string {
  const date = iso ? new Date(iso) : new Date();
  if (Number.isNaN(date.getTime())) return formatCertificateDate(); 
  return date
    .toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })
    .toUpperCase();
}

function wrapText(text: string, maxCharsPerLine: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";
  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (candidate.length > maxCharsPerLine && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}



/** Premium Gold Circular Badge Seal */
function BadgeSeal() {
  const size = 150;

  return (
    <g transform={`translate(${WIDTH / 2}, 515)`}>
      <image
        href="/images/seal.png"
        x={-size / 2}
        y={-size / 2}
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
}

interface CertificateSvgProps {
  learnerName: string;
  projectTitle: string;
  completedDate: string;
  programmeName: string;
  companyName?: string;
  svgRef: React.RefObject<SVGSVGElement | null>; 
}



function CertificateSvg({
  learnerName,
  projectTitle,
  completedDate,
  programmeName,
  companyName = "THEOTECHNE",
  svgRef,
}: CertificateSvgProps) {
  return (
    
    <svg
      ref={svgRef}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width="100%"
      height="100%"
      role="img"
      aria-label={`Certificate of Participation for ${learnerName}`}
      style={{ background: COLORS.bgOuter, display: "block" }}
    >
      <defs>
        {/* Subtle background wave pattern for dark border */}
        <pattern id="wave-pattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M 0 10 Q 10 0, 20 10 T 40 10" fill="none" stroke="#102B55" strokeWidth="1.5" />
        </pattern>
        {/* Soft drop shadow for top tab */}
        <filter id="tab-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Dark Outer Frame with Wave Pattern */}
      <rect x={0} y={0} width={WIDTH} height={HEIGHT} fill={COLORS.bgOuter} />
      <rect x={0} y={0} width={WIDTH} height={HEIGHT} fill="url(#wave-pattern)" />

      {/* Main Inner Light Gray Certificate Card */}
      <rect x={55} y={50} width={WIDTH - 110} height={HEIGHT - 100} fill={COLORS.bgInner} />

      {/* Double Gold Line Inner Frame */}
      <rect x={80} y={75} width={WIDTH - 160} height={HEIGHT - 150} fill="none" stroke={COLORS.gold} strokeWidth={2} />
      <rect x={84} y={79} width={WIDTH - 168} height={HEIGHT - 158} fill="none" stroke={COLORS.gold} strokeWidth={0.75} />

      {/* School Name */}
<text
  x={105}
  y={105}
  fontFamily={BODY_FONT}
  fontSize={20}
  fontWeight="700"
  fill={COLORS.textDark}
  letterSpacing={1}
>
  THEOTECHNE INSTITUTE
</text>

      {/* Hanging Header Shield/Tab for Logo */}
      <g filter="url(#tab-shadow)">
        <path
          d={`M ${WIDTH / 2 - 100} 50 L ${WIDTH / 2 + 100} 50 L ${WIDTH / 2 + 100} 100 Q ${WIDTH / 2 + 100} 135, ${WIDTH / 2} 145 Q ${WIDTH / 2 - 100} 135, ${WIDTH / 2 - 100} 100 Z`}
          fill={COLORS.tabBg}
          stroke={COLORS.tabBorder}
          strokeWidth={1}
        />
      </g>

      {/* Logo & Company Name in Tab */}
      <g transform={`translate(${WIDTH / 2}, 90)`}>
  <image
    href="/images/logo.png"
    x="-40"
    y="-35"
    width="80"
    height="80"
    preserveAspectRatio="xMidYMid meet"
  />

  <text
    x={0}
    y={28}
    textAnchor="middle"
    fontFamily={BODY_FONT}
    fontSize={11}
    fontWeight="600"
    fill={COLORS.textDark}
    letterSpacing={0.5}
  >
    {companyName}
  </text>
</g>

      {/* Certificate Title */}
      <text
        x={WIDTH / 2}
        y={215}
        textAnchor="middle"
        fontFamily={CONDENSED_FONT}
        fontSize={42}
        fontWeight="700"
        letterSpacing={6}
        fill={COLORS.textDark}
      >
        CERTIFICATE
      </text>

      {/* Subtitle with horizontal accents */}
      <g>
        <line x1={WIDTH / 2 - 140} y1={238} x2={WIDTH / 2 - 70} y2={238} stroke={COLORS.textMuted} strokeWidth={1} />
        <text
          x={WIDTH / 2}
          y={242}
          textAnchor="middle"
          fontFamily={BODY_FONT}
          fontSize={12}           
          fontWeight="700"         
          letterSpacing={1}
          fill={COLORS.textDark} 
        >
          OF {programmeName.toUpperCase()}
        </text>
        <line x1={WIDTH / 2 + 70} y1={238} x2={WIDTH / 2 + 140} y2={238} stroke={COLORS.textMuted} strokeWidth={1} />
      </g>

      {/* Presentation Line */}
      <text
        x={WIDTH / 2}
        y={288}
        textAnchor="middle"
        fontFamily={BODY_FONT}
        fontSize={15}          
        fontWeight="600"        
        fill={COLORS.textDark} 
      >
        This Certificate is Proudly Presented to
      </text>

      {/* Recipient Name */}
      <text
        x={WIDTH / 2}
        y={350}
        textAnchor="middle"
        fontFamily={SCRIPT_FONT}
        fontSize={56}
        fill={COLORS.textDark}
      >
        {learnerName || "Joseph Herrera"}
      </text>
      <line x1={WIDTH / 2 - 160} y1={368} x2={WIDTH / 2 + 160} y2={368} stroke={COLORS.textDark} strokeWidth={0.75} opacity={0.4} />

      {/* Description Body Paragraph */}
<text
  x={WIDTH / 2}
  y={390}
  textAnchor="middle"
  fontFamily={BODY_FONT}
  fontSize={13}
  fontWeight="600"
  fill={COLORS.textDark}
>
  {wrapText(
    projectTitle ||
      "Awarded for completing the Practical AI for Everyday Life programme — demonstrating clear prompting, careful review, and responsible human judgement in real project work.",
    68 
  ).map((line, i) => (
    <tspan key={i} x={WIDTH / 2} dy={i === 0 ? 0 : 16}>
      {line}
    </tspan>
  ))}
</text>

      {/* Badge Seal */}
      <BadgeSeal />

      {/* Footer: Date Section (Left) */}
<g transform="translate(230, 505)">
  <text
    x={0}
    y={0}
    textAnchor="middle"
    fontFamily={BODY_FONT}
    fontSize={13}
    fontWeight="500"
    letterSpacing={0.8}
    fill={COLORS.textDark}
  >
    {completedDate}
  </text>

  <line
    x1={-60}
    y1={10}
    x2={60}
    y2={10}
    stroke={COLORS.textDark}
    strokeWidth={1}
  />

  <text
    x={0}
    y={26}
    textAnchor="middle"
    fontFamily={BODY_FONT}
    fontSize={12}           
    fontWeight="600"          
    letterSpacing={0.8}
    fill={COLORS.textDark} 
  >
    DATE
  </text>
</g>


{/* Footer: Director Signature Section (Right) */}
<g transform="translate(770, 505)">

  {/* Actual Director Signature */}
  <image
    href="/images/signature.png"
    x={-55}
    y={-35}
    width={110}
    height={38}
    preserveAspectRatio="xMidYMid meet"
  />

  {/* Signature Line */}
  <line
    x1={-60}
    y1={10}
    x2={60}
    y2={10}
    stroke={COLORS.textDark}
    strokeWidth={1}
  />

  {/* Position */}
  <text
    x={0}
    y={26}
    textAnchor="middle"
    fontFamily={BODY_FONT}
    fontSize={12}            
    fontWeight="600"          
    letterSpacing={0.8}
    fill={COLORS.textDark} 
  >
    DIRECTOR
  </text>

</g>
    </svg>
  );
}

export function CertificateGenerator({
  learnerName = "",
  projectTitle = "In recognition of successfully completing Practical AI for Everyday Life, a hands-on programme covering safe and responsible AI use, effective prompting, ethical judgement, and applied projects across ministry, teaching, and everyday office work.",
  completedDate,
  programmeName = "COMPLETION",
}: {
  learnerName?: string;
  projectTitle?: string;
  completedDate?: string;
  programmeName?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const formattedDate = formatCertificateDate(completedDate);
  

  /** Fetches an image and returns it as a base64 data: URI, so it can be
 *  embedded directly in the exported SVG with no secondary network fetch
 *   */
async function urlToDataUri(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

const handleDownload = useCallback(async () => {
  if (!svgRef.current) return;
  setIsExporting(true);
  setExportError(null);
  try {
    if ("fonts" in document) {
      await (document as Document & { fonts: FontFaceSet }).fonts.ready;
    }

    // Work on a clone so the on-screen SVG keeps its normal /images/*.png
    // references only the export copy gets inlined.
    const clone = svgRef.current.cloneNode(true) as SVGSVGElement;
const imageEls = Array.from(clone.querySelectorAll("image"));
await Promise.all(
  imageEls.map(async (imgEl) => {
    const href = imgEl.getAttribute("href") ?? imgEl.getAttribute("xlink:href");
    if (!href || href.startsWith("data:")) return;
    const dataUri = await urlToDataUri(href); 
    imgEl.setAttribute("href", dataUri);
    imgEl.removeAttribute("xlink:href");
  })
);

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(clone);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Could not render certificate image."));
      img.src = url;
    });

    const scale = 2;
    const canvas = document.createElement("canvas");
    canvas.width = WIDTH * scale;
    canvas.height = HEIGHT * scale;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context unavailable.");
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);
    URL.revokeObjectURL(url);

    const pngUrl = canvas.toDataURL("image/png");
    const safeName = (learnerName || "certificate").trim().replace(/\s+/g, "_");
    const a = document.createElement("a");
    a.href = pngUrl;
    a.download = `${safeName}_certificate.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (err) {
    setExportError("Couldn't generate PNG image. Please try again.");
    console.error(err);
  } finally {
    setIsExporting(false);
  }
}, [learnerName]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;500;600&family=Oswald:wght@700&display=swap');

        @media print {
          body * { visibility: hidden; }
          #certificate-print-area, #certificate-print-area * { visibility: visible; }
          #certificate-print-area {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @page { size: landscape; margin: 0; }
        }
      `}</style>

      <div
        id="certificate-print-area"
        className="overflow-hidden rounded-lg border border-slate-200 shadow-xl"
        style={{ opacity: 1, aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        <CertificateSvg
          svgRef={svgRef}
          learnerName={learnerName}
          projectTitle={projectTitle}
          completedDate={formattedDate}
          programmeName={programmeName}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button
          onClick={handleDownload}
          disabled={isExporting}
          className="rounded-full bg-slate-900 text-base font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
        >
          <Download className="mr-2 h-4 w-4" />
          {isExporting ? "Preparing..." : "Download Certificate"}
        </Button>

        {/*
        <Button
          onClick={handlePrint}
          variant="outline"
          className="rounded-full border-slate-300 text-base font-semibold text-slate-700 hover:bg-slate-100"
        >
          <Printer className="mr-2 h-4 w-4" />
          Print
        </Button>
        */}
      </div>
      {exportError && <p className="mt-3 text-sm text-red-600 font-medium">{exportError}</p>}
    </div>
  );
}