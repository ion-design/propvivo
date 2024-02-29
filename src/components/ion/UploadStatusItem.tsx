// Generated with Ion on 2/28/2024, 7:35:32 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3157:37027
import { Files, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Progress from "@/components/ion/Progress";
import clsx from "clsx";
type UploadStatusItemProps = {
  fileName?: string;
  isComplete?: boolean;
  className?: string;
};

function UploadStatusItem({
  fileName = "chart_of_accounts.xls",
  isComplete = false,
  className = "",
}: UploadStatusItemProps) {
  return (
    <div className={clsx("w-full flex items-center gap-5 h-fit", className)}>
      <div className="flex-1 flex items-center gap-2">
        <Files size={24} weight={"regular"} />
        <div className="text-sm font-semibold text-foreground">
          {fileName}
        </div>
      </div>
      <div className="w-1/2 flex justify-between items-center gap-2">
        <Progress value={isComplete ? 100 : 50} className="w-full h-1.5" />
        {isComplete ? (
            <div className="text-sm text-foreground">50%</div>
        ) : (
            <CheckCircle size={16} weight={"bold"} />
        )}
      </div>
    </div>
  );
}
export default UploadStatusItem;
