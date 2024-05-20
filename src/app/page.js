// page.jsx
import Layout from "./layout";
import Landing from "@/components/component/Landing"; // Landing 컴포넌트를 default export로 임포트

export default function Page() {
    return (
        <Layout>
            <Landing /> {/* Landing 컴포넌트를 JSX 형태로 호출 */}
        </Layout>
    );
}
