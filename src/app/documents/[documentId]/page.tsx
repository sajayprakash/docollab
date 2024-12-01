import { Editor } from "./editor";
interface DocumentPageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentPage = async ({ params }: DocumentPageProps) => {
  const awaitedParams = await params;
  console.log(awaitedParams.documentId);
  return (
    <div className="min-h-screen bg-slate-50">
      <Editor />
    </div>
  );
};

export default DocumentPage;
