import ReactDOM from "react-dom/client";

import { Root } from "@/components/Root";

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import "./mockEnv.ts";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "./index.css";

import WebApp from "@twa-dev/sdk";

WebApp.ready();

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
