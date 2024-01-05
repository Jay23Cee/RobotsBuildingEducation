import React from "react";
import { LightningAddress } from "@getalby/lightning-tools";
import { Button, Modal, launchModal } from "@getalby/bitcoin-connect-react";
import toast, { Toaster } from "react-hot-toast";

export const BitcoinManager = ({ handleZeroKnowledgePassword }) => {
  const [invoice, setInvoice] = React.useState<string | undefined>(undefined);
  const [preimage, setPreimage] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    (async () => {
      try {
        const ln = new LightningAddress("levitatingnight182471@getalby.com");
        await ln.fetch();
        setInvoice(
          (
            await ln.requestInvoice({
              satoshi: 1,
              comment: "Paid with Bitcoin Connect",
            })
          ).paymentRequest
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  async function payInvoice() {
    try {
      if (!window.webln || !window.webln) {
        throw new Error("Please connect your wallet");
      }
      if (!invoice) {
        throw new Error("No invoice available");
      }
      const result = await window.webln.sendPayment(invoice);
      setPreimage(result?.preimage);
      if (!result?.preimage) {
        throw new Error("Payment failed. Please try again");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Toaster />

      <Button
        appName="Robots Building Education"
        onConnect={() => toast("Connected!")}
        onDisconnect={() => handleZeroKnowledgePassword(null, true, null)}
      />
      <br />
    </>
  );
};
