// pages/index.js
import Layout from "@/app/layout";
import ModelViewContainer from "@/components/modelviewer/ModelViewContainer";

export default function Page() {
    return (
        <Layout>
            <ModelViewContainer modelUrl="/model/scene.gltf" />;
        </Layout>
    );
}
