import { Editor } from "./editor";
import Toolbar from "./toolbar";
interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentPage = async ({ params }: DocumentPageProps) => {
  const awaitedParams = await params;
  console.log(awaitedParams.documentId);
  return (
    <div className="min-h-screen bg-slate-50">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentPage;
