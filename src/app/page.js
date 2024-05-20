// page.jsx
import Layout from "./layout";
import { landing } from "@/components/component/landing";

export default function Page() {
    return <Layout>{landing()}</Layout>;
}
