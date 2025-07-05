import { Home } from "../modules/home";
import { AppProvider } from "./provider";

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
