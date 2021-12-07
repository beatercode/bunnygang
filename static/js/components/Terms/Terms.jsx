import React from "react";
import * as f from "./styles";
import { SpacerLarge, SpacerSmall } from "../../styles/globalStyles";

const Terms = () => {
  return (
    <f.TermsContainer>
      <f.Title>Terms</f.Title>
      <SpacerLarge />
      <f.Description>
        The Bunny Gang NFT is a collection of digital artworks (NFTs) running on
        the Arbitrum network. This website is only an interface allowing
        participants to exchange digital collectibles. Users are entirely
        responsible for the safety and management of their own private Arbitrum
        wallets and validating all transactions and contracts generated by this
        website before approval. Furthermore, as the Bunny Ganf NFT smart
        contract runs on the Arbitrum network, there is no ability to undo,
        reverse, or restore any transactions.
      </f.Description>
      <SpacerSmall />
      <f.Description>
        This website and its connected services are provided “as is” and “as
        available” without warranty of any kind. By using this website you are
        accepting sole responsibility for any an all transactions involving The
        Bunny Gang NFT digital collectibles.
      </f.Description>
      <SpacerLarge />
      <f.Title>Ownership</f.Title>
      <SpacerLarge />
      <f.Description>
        i. You Own the NFT. Each DBunny is an NFT on the Arbitrum blockchain.
        When you purchase an NFT, you own the underlying Bunny, the Art,
        completely. Ownership of the NFT is mediated entirely by the Smart
        Contract and the Arbitrum Network: at no point may we seize, freeze, or
        otherwise modify the ownership of any NFT.
      </f.Description>
      <SpacerSmall />
      <f.Description>
        ii. Personal Use. Subject to your continued compliance with these Terms,
        BG Labs grants you a worldwide, royalty-free license to use, copy, and
        display the purchased Art, along with any extensions that you choose to
        create or use, solely forthe following purposes: (i) for your own
        personal, non-commercial use; (ii) as part of a marketplace that permits
        the purchase and sale of your NFT, provided that the marketplace
        cryptographically verifies each Bunny gang owner’s rights to display the
        Art for their Bunny to ensure that only the actual owner can display the
        Art; or (iii) as part of a third party website or application that
        permits the inclusion, involvement, or participation of your Bunny,
        provided that the website/application cryptographically verifies each
        Bunny owner’s rights to display the Art for their Bunny to ensure that
        only the actual owner can display the Art, and provided that the Art is
        no longer visible once the owner of the Bunny leaves the
        website/application.
      </f.Description>
      <SpacerSmall />
      <f.Description>
        iii. Commercial Use. Subject to your continued compliance with these
        Terms, BG Labs grants you an unlimited, worldwide license to use, copy,
        and display the purchased Art for the purpose of creating derivative
        works based upon the Art (“Commercial Use”). Examples of such Commercial
        Use would e.g. be the use of the Art to produce and sell merchandise
        products (T-Shirts etc.) displaying copies of the Art. For the sake of
        clarity, nothing in this Section will be deemed to restrict you from (i)
        owning or operating a marketplace that permits the use and sale of Bunny
        generally, provided that the marketplace cryptographically verifies each
        Bunny owner’s rights to display the Art for their Bunny to ensure that
        only the actual owner can display the Art; (ii) owning or operating a
        third party website or application that permits the inclusion,
        involvement, or participation of Bunny generally, provided that the
        third party website or application cryptographically verifies each Bunny
        owner’s rights to display the Art for their Bunny to ensure that only
        the actual owner can display the Art, and provided that the Art is no
        longer visible once the owner of the Purchased Bunny leaves the
        website/application; or (iii) earning revenue from any of the foregoing.
      </f.Description>
    </f.TermsContainer>
  );
};
export default Terms;