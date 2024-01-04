import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ImpactWallet } from "./ProofOfWork/ImpactWallet/ImpactWallet";

// this is the craziest routing I ever did

// lets fix this after deleting things:
// remove the route and use the userAuth object instead to reference the user ID
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/profile/:profileID",
        element: <ImpactWallet globalScholarshipCounter={undefined} databaseUserDocument={undefined} computePercentage={undefined} globalImpactCounter={undefined} isImpactWalletOpen={undefined} setIsImpactWalletOpen={undefined} handlePathSelection={undefined} isDemo={undefined} globalReserveObject={undefined} isEmotionalIntelligenceOpen={undefined} setIsEmotionalIntelligenceOpen={undefined} usersEmotionsCollectionReference={undefined} usersEmotionsFromDB={undefined} updateUserEmotions={undefined} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
