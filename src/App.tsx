import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import ChildList from "./components/ChildList";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CCard className="mb-4">
        <CCardHeader className="flex">
          <h1>Children</h1>
        </CCardHeader>
        <CCardBody>
          <ChildList />
        </CCardBody>
      </CCard>
    </QueryClientProvider>
  );
}

export default App;
