// Generated with Ion on 2/28/2024, 7:42:30 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3157:37180
import UploadStatusItem from "@/components/ion/UploadStatusItem";
import clsx from "clsx";
type ExcelUploadModalContentProps = {
  className?: string;
};

function UploadingSheet({
  className = "",
}: ExcelUploadModalContentProps) {
  return (
    <div className={clsx("flex-col flex gap-6 h-fit", className)}>
      <UploadStatusItem fileName="chart_0.xls" isComplete={true} />
      <UploadStatusItem fileName="chat_1.xls" isComplete={true} />
      <UploadStatusItem fileName="chart_of_2.xls" isComplete={false} />
      <UploadStatusItem fileName="chart_3.xls" isComplete={false} />
    </div>
  );
}
export default UploadingSheet;
