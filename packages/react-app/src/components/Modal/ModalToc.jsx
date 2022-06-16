import React from "react";
import "./ModalToc.css";
import { useEffect } from "react";

function ModalToc({ setOpenModalToc }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title-modal">
          <h1>TERMS OF USE</h1>
        </div>
        <div className="body-modal">
          <div className="scroll-toc">
            <p>
              VRTCL LTD (“VerticalCrypto Art”, “VCA” “we,” “us”) provides services, content, products including
              intangible property, or other materials to you through its website, accessible at verticalcrypto.art or
              https://verticalcrypto.art (the “Website”), subject to these terms of use as amended from time to time
              (the “Terms”) The Terms govern your use of the Website as well as all software, tools, features,
              functionality, applications, products, and services offered by us to you, whether or not through the
              Website (collectively, the “Services”), including non-fungible tokens (“NFTs”) associated with works of
              digital art (“Digital Works”) and any rights, products, services, privileges, and/or benefits that we may
              choose to offer in connection with such NFTs (collectively, “Utility”).
            </p>
            <p>
              You are entering into a binding agreement. By accessing or using our Services, connecting your digital or
              cryptocurrency wallet (e.g., MetaMask , Coinbase Wallet) to the Services, or otherwise using or accessing
              the Services, you acknowledge that you are entering into a binding agreement with VRTCL LTD that includes:
              (a) these Terms; (b) any other terms, conditions, or policies linked to on our Services or in our Terms.
              You further acknowledge and agree that you have reviewed these documents. If you do not agree with the
              terms of these documents, you may not use or access our Services.
            </p>
            <p>
              We may modify these Terms. We reserve the right to modify these Terms at any time and without prior
              notice. If we modify these Terms, we will post the modification on the Services or provide you with notice
              of the modification. By continuing to access or use the Services after we have posted a modification on
              the Services or have provided you with notice of a modification, you are indicating that you agree to be
              bound by the modified Terms. If the modified Terms are not acceptable to you, your only recourse is to
              cease using the Services. We encourage you to check back regularly to review these Terms.
            </p>
            <p>
              We may modify or discontinue the Services. We reserve the right, in our sole discretion, to change the URL
              of the Website and modify, discontinue, restrict, or block access to all or part of the Services without
              notice to you. You agree that VerticalCrypto Art will not be liable to you or to any third party for any
              such modification, suspension, termination, or restriction.
            </p>
            <p>
              ALL TRANSACTIONS INITIATED THROUGH OUR WEBSITE ARE EFFECTED BY THIRD-PARTY DIGITAL WALLET EXTENSIONS
              (each, an “Extension”). BY USING OUR SERVICES, YOU AGREE THAT SUCH TRANSACTIONS ARE GOVERNED BY THE TERMS
              OF SERVICES AND PRIVACY POLICIES FOR THE APPLICABLE EXTENSIONS. FOR METAMASK, THOSE TERMS ARE AVAILABLE AT
              https://metamask.io/terms.html AND https://metamask.io/privacy.html.
            </p>
            <p>
              TO THE EXTENT ANY THIRD PARTY BESIDES VERTICALCRYPTO ART OFFERS UTILITY IN CONNECTION WITH ANY NFT, YOU
              ACKNOWLEDGE AND AGREE THAT VERTICALCRYPTO ART SHALL NOT BE A PARTY TO, OR HAVE ANY RESPONSIBILITY OR
              LIABILITY FOR, ARISING OUT OF, RELATING TO, ASSOCIATED WITH, OR RESULTING FROM ANY DISPUTES BETWEEN YOU
              AND THE APPLICABLE THIRD PARTY WITH REGARD TO SUCH UTILITY.
            </p>
            <h3>VCA Genesis Membership: How to Participate</h3>
            <ol>
              <li>
                Background and Information: Eligible Participants (as defined below) will have the opportunity, in
                accordance with these Terms, for a limited time, to visit the Website and claim (or mint) one (1) NFT
                from VerticalCrypto Art’s NFT collection, “VCA Genesis Membership” (the “Collection”). The Collection
                will contain a total of one thousand (1,000) NFTs (each, a “VCA Genesis Membership”). The Digital Work
                for each VCA Genesis Membership NFT, including its look and appearance,, will be identical across the
                entire Collection and may change or evolve over time.
              </li>
              <li>
                Membership and Utility: Each VCA Genesis Membership NFT functions as a membership pass to the VCA
                community. Community Members (as defined below) will have exclusive access to designated areas of the
                VCA Discord server (the “Server”) and may be eligible in the future to: claim, redeem, mint, or purchase
                NFTs from one or more collections on or through the Services, whether exclusively or before such NFTs
                are made available for sale to third parties or the public; and attend virtual and/or in-person meetups
                or events organised by or in collaboration with VerticalCrypto Art or its affiliates (“Events”). You
                acknowledge and agree that, as a Community Member, your access to one or more Events may be subject to
                additional terms and conditions including, without limitation, your providing VerticalCrypto Art or its
                designee proof of identification and/or passing a criminal or other background check. VerticalCrypto Art
                reserves the right, in its sole discretion, to restrict, limit, or deny any Utility to any Community
                Member, including, without limitation, to limit the period of time when any Utility is available, for
                any reason, at any time. No Utility is intended to be any kind of endorsement whatsoever, and
                VerticalCrypto Art makes no recommendation and provides no investment advice in connection with any
                Utility or otherwise as a result of being a Community Member.
              </li>
              <li>
                Eligibility: VCA Genesis Membership NFTs will be available initially through the Services to users
                (“Eligible Participants”) in accordance with the following terms:
                <ol>
                  <li>
                    Approximately four hundred (400) VCA Genesis Membership NFTs will be made available to, and reserved
                    for, designees chosen by VCA in VCA’s sole and absolute discretion, but may be selected based upon a
                    designee’s anticipated contributions to the VCA community through active engagement, insights, and
                    diversity of thought, background, and experience (“Curated Invitees”).
                  </li>
                  <li>
                    30 VCA Genesis Membership NFTs will be minted for future distribution by VerticalCrypto Art in its
                    sole and absolute discretion.
                  </li>
                  <li>20 VCA Genesis Membership NFTs will be minted for Logos Dao Treasury.</li>
                  <li>
                    The remaining VCA Genesis Membership NFTs will be available to be minted from members of the public,
                    limited by 2 NFTs per address.
                  </li>
                  <li>
                    VerticalCrypto Art shall have the right, in its sole and absolute discretion, but not the
                    obligation, to distribute, sell, or offer any number of VCA Genesis Membership NFTs that are not
                    claimed by Eligible Participants during the Availability Window (as defined below) to any other
                    Users or third parties.
                  </li>
                </ol>
              </li>
              <li>
                Availability: VCA Genesis Membership NFTs will be available for Eligible Participants to claim on the
                Website at the following dates and times (“Availability Window”):
                <ol>
                  <li>
                    Starting on Wednesday, June 15, 2022 at 5:00pm BST, Curated Invitees will have seventy two (72)
                    hours to claim their VCA Genesis Membership NFT using the Website.
                  </li>
                  <li>
                    Starting on Saturday, June 18, 2022 at 5:00pm BST, members of the public will be able to claim their
                    VCA Genesis Membership NFTs using the Website.
                  </li>
                </ol>
              </li>
              <li>
                Secondary Market: When VCA Genesis Membership NFTs are minted they will be available for purchase and
                re-sale on other websites, platforms, secondary marketplaces (e.g., OpenSea, LooksRare) (“Secondary
                Marketplaces”). You acknowledge and agree that VerticalCrypto Art receives a ten percent (10%) royalty
                fee on all transactions involving VCA Genesis Membership NFTs on the applicable Secondary Marketplaces,
                which funds shall be used in VerticalCrypto Art’s sole and absolute discretion. You acknowledge and
                agree that if a Community Member decides to sell an VCA Genesis Membership NFT (“Secondary Sale”), then
                VerticalCrypto Art is not a party to any agreement between the applicable buyer, seller, or facilitator
                of the Secondary Sale.
              </li>
              <li>
                Wallets: If you wish to claim or purchase an VCA Genesis Membership NFT, you must use a digital wallet
                that allows you to purchase, store, and engage in transactions using cryptocurrency (“Wallet”), and you
                must connect and unlock your Wallet through the Services. To initially claim or mint an VCA Genesis
                Membership NFT using the Services during the Availability Window, the public address of the Wallet you
                wish to use must be included in VerticalCrypto Art’s curated list of Eligible Participants (the “Allow
                List”) based solely on your status as either a Curated Invitee.{" "}
              </li>
              <li>
                Fees: VerticalCrypto Art will make VCA Genesis Membership NFTs available through the Services to the
                Curated Invitees and the members of the public at no cost; provided, however, that you are responsible
                at all times for paying any transaction and other applicable fees necessary to effectuate the minting or
                transfer of your VCA Genesis Membership NFT on the Ethereum blockchain (e.g., gas fees). You must have
                enough funds ￼in your Wallet to cover the cost of gas and any other applicable fees. Once you authorise
                a transaction to claim your VCA Genesis Membership NFT, your order is passed on to the applicable
                Extension, which completes the transaction on your behalf. You may not substitute any other currency,
                whether cryptocurrency or fiat currency, for the currency necessary to effectuate the transaction
                ($ETH).
              </li>
              <li>
                Transfers. Except with respect to transferring control of an VCA Genesis Membership NFT to the Eligible
                Participants, (a) VerticalCrypto Art has no responsibility with respect to any transfer of any NFT, and
                VerticalCrypto Art will not be liable for the acts or omissions of any third parties, nor will
                VerticalCrypto Art be liable for any damages you may suffer as a result of your transactions or any
                other interaction with any third parties; and (b) VerticalCrypto Art has no control over the transfer,
                storage, ownership, or maintenance of any VCA Genesis Membership NFT. The transfer of an VCA Genesis
                Membership NFT to your Wallet will be completed in accordance with these Terms.
              </li>
            </ol>
            <p className="bold-text">
              ALL TRANSACTIONS ARE FINAL. AT NO TIME WILL VCA REFUND ANY TRANSACTION FEES OR OTHER COSTS YOU INCUR WHILE
              USING THE SERVICES. VCA GENESIS MEMBERSHIP NFTS ARE INTANGIBLE DIGITAL ASSETS THAT EXIST ONLY BY VIRTUE OF
              THE OWNERSHIP RECORD MAINTAINED ON THE ETHEREUM BLOCKCHAIN. ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY
              VCA GENESIS MEMBERSHIP NFT OCCURS ON THE DECENTRALISED LEDGER WITHIN THE ETHEREUM NETWORK. WE DO NOT
              GUARANTEE THAT WE CAN EFFECT THE TRANSFER OF TITLE OR RIGHT IN ANY VCA GENESIS MEMBERSHIP NFT.
            </p>
            <h3>User Representations and Warranties</h3>
            <p>By accessing or using our Services, you represent, warrant, and agree that:</p>
            <ul>
              <li>Age. You are at least eighteen (18) years old;</li>
              <li>
                Authority. You have all requisite capacity, power, and authority to enter into and be bound by these
                Terms. If you accept these Terms on behalf of a company or other legal entity, you represent and warrant
                that you have the authority to bind that company or other legal entity to these Terms and, in such
                event, “you” and “your” will refer and apply to that company or other legal entity.
              </li>
              <li>
                Non-Contravention. These Terms do not, and the performance of your obligations under these Terms and
                your minting, bidding on, buying, or selling of any NFTs, as applicable to your use of the Services,
                will not: (i) if you are an entity, conflict with or violate any of the charter documents of such entity
                or any resolution adopted by its equity holders or other persons having governance authority over the
                entity; (ii) contravene, conflict with, or violate any right of any third party or any applicable legal
                requirement to which you or any of the assets owned or used by you, is subject; or (iii) result in any
                breach of or constitute a default (or an event that with notice or lapse of time or both would become a
                default) under any material contract or agreement to which you are a party, permit held by you or legal
                requirement applicable to you.
              </li>
              <li>
                Independent Investigation and Non-Reliance. You are sophisticated, experienced, and knowledgeable in the
                minting, bidding on, buying, selling, storing and transfer of NFTs. Additionally, you have conducted an
                independent investigation of the Services and the matters contemplated by these Terms, have formed your
                own independent judgement regarding the benefits and risks of and necessary and desirable practices
                regarding the foregoing, and, in making the determination to mint, bid on, buy, sell, or transfer any
                NFTs and any Utility using the Services, you have relied solely on the results of such investigation and
                such independent judgement. Without limiting the generality of the foregoing, you understand,
                acknowledge, and agree that the legal requirements pertaining to blockchain technologies and digital
                assets generally, including, without limitation, the NFTs, are uncertain, and you have conducted an
                independent investigation of such potentially applicable legal requirements and the resulting risks and
                uncertainties, including the risk that one or more governmental entities or other persons may assert
                that any digital assets or cryptographic tokens (including the NFTs) may constitute securities under
                applicable legal requirements. You hereby irrevocably disclaim and disavow reliance upon any statements
                or representations made by or on behalf of, or information made available by, VerticalCrypto Art, in
                determining to enter into these Terms, mint, bid on, buy, or sell any Utility or use the Services.
              </li>
              <li>
                ompliance. You have not failed to comply with, and have not violated, any applicable legal requirement
                relating to any blockchain technologies, token trading activities, or minting of NFTs. No investigation
                or review by any governmental entity is pending or, to your knowledge, has been threatened against or
                with respect to you, nor does any government order or action prohibit you or any of your representatives
                from engaging in or continuing any conduct, activity, or practice relating to the Services.
              </li>
            </ul>
            <h3>Rights and Restrictions</h3>
            <p>
              Once you successfully receive an VCA Genesis Membership NFT, you will own that NFT. Such owners of NFTs
              shall be referred to herein as “Community Members.” Provided that the VCA Genesis Membership NFT was
              obtained lawfully and in accordance with these Terms, at all relevant times, VerticalCrypto Art will
              recognize as the Community Member the individual able to authorise transactions through the Wallet
              associated with the applicable VCA Genesis Membership NFT as identified by the Collection’s smart
              contract, the address of which is as follows: [INSERT ADDRESS OF COLLECTION].
            </p>
            <p className="bold-text">
              WHILE AN NFT MAY BE ASSOCIATED WITH A DIGITAL WORK, IT IS IMPORTANT TO UNDERSTAND THAT NFT OWNERS DO NOT
              OWN THE DIGITAL WORK OR THE COPYRIGHT IN THE DIGITAL WORK (UNLESS INCLUDED AS PART OF THE NFT’S UTILITY).
            </p>
            <p>
              By lawfully obtaining an VCA Genesis Membership NFT (i.e., as an Eligible Participant during the
              Availability Window, a bona fide purchaser, or the recipient of a gift), the Community Member will receive
              a limited, personal, worldwide, non-exclusive, non-assignable, non-sublicensable, royalty-free license to
              download, access, and use one or more copies of the Digital Work associated with the NFT to: (i) publicly
              and privately display the Digital Work at any size; and (ii) market, promote, advertise, and sell the NFT
              associated with the Digital Work. This license belongs only to the current Community Member as defined
              herein but automatically terminates when they cease to be the Community Member for any reason.
            </p>
            <p>
              For the sake of clarity, Community Members may not do (nor permit any third party to do or attempt to do)
              any of the following:
            </p>
            <ul>
              <li>Modify any Digital Work in any way.</li>
              <li>
                Make “commercial use” of any Digital Work, including any Digital Work associated with their NFT(s),
                including, for example, by creating and selling copies of the Digital Work, licensing the Digital Work
                for commercial purposes (e.g., to sell merchandise, products, or services), or otherwise commercially
                exploiting the Digital Work.
              </li>
              <li>
                Use any Digital Work or NFT in any way that: (a) violates the rights of any third party, any applicable
                law, rule, or regulation, or these Terms; (b) is obscene, profane, pornographic, vulgar, or offensive;
                (c) incites or promotes violence or violent or dangerous behavior, or depicts violence (either towards
                others or oneself); (d) involves hate speech, endorses any form of hate, or harasses, abuses, insults,
                harms, defames, slanders, disparages, intimidates, threatens, or discriminates against others based on
                gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (e) spreads
                false, deceptive, misleading, otherwise unsubstantiated or unfair information or material or promotes
                any particular political agenda or message; and (f) promotes any activities that may be or appear unsafe
                or dangerous, including, without limitation, excessive consumption of alcohol, illegal drugs, tobacco,
                firearms/weapons (or the use of any of the foregoing).
              </li>
              <li>
                Except as allowed under these Terms, to use any of VerticalCrypto Art’s intellectual property rights
                (such as trademarks, copyright, and design rights) whether registered or unregistered. All rights
                therein and goodwill associated therewith shall inure to the benefit of VerticalCrypto Art.
              </li>
            </ul>
            <p>
              By participating in the Services, you grant to VerticalCrypto Art an irrevocable, perpetual, unlimited,
              royalty-free, fully paid-up, worldwide, sublicensable right to use your public Wallet address and, to the
              extent made publicly available, any alias, name, avatar, online profile, domain name, or other information
              associated with your public Wallet address, for any lawful purpose whatsoever, including without
              limitation, for purposes of advertising or promoting the Collection, VerticalCrypto Art, or the Services.
            </p>
            <h3>Ownership</h3>
            <p>
              Unless otherwise indicated in writing by us, the Services and all content and other materials contained
              therein, including, without limitation, the VerticalCrypto Art logo and all designs, text, graphics,
              pictures, information, data, software, sound files, other files and the selection and arrangement thereof
              (collectively, “Content”) are the proprietary property of VerticalCrypto Art or our affiliates, licensors,
              or users, as applicable. Notwithstanding anything to the contrary in these Terms, the Services and Content
              may include software components provided by VerticalCrypto Art or its affiliates or a third party that are
              subject to separate licence terms, in which case those licence terms will govern such software components.
              All other trademarks, registered trademarks, product names, and other names or logos mentioned on the
              Services are the property of their respective owners and may not be copied, imitated, or used, in whole or
              in part, without the permission of the applicable trademark holder. Reference to any products, services,
              processes, or other information by name, trademark, manufacturer, supplier, or otherwise does not
              constitute or imply endorsement, sponsorship, or recommendation by VerticalCrypto Art.
            </p>
            <h3>Licence to Our Services and Content</h3>
            <p>
              Subject to your compliance with these Terms and other applicable terms, you are hereby granted a limited,
              revocable, nonexclusive, nontransferable, non-assignable, non-sublicensable, “as-is” licence to access and
              use the Services and Content for your own personal, non-commercial use; provided, however, that such
              licence does not include any right to: (i) modify or otherwise make any derivative uses of the Services or
              Content, or any portion thereof, (ii) use any data mining, robots, or similar data gathering or extraction
              methods, (iii) download (other than page caching) any portion of the Services or Content, except as
              expressly permitted by us, or (iv) use the Services or Content other than for their intended purposes.
            </p>
            <h3>Acceptable Use</h3>
            <p>
              You agree that you are solely responsible for your conduct while participating in the minting, transfer,
              purchase, or sale of NFTs or otherwise accessing or using the Services. You agree that you will abide by
              these Terms and will not:
            </p>
            <ul>
              <li>
                Use the Services or any blockchain technology for any illegal or unauthorised purpose, or engage in,
                encourage, or promote any activity that violates any applicable law or these Terms.
              </li>
              <li>Provide false or misleading information to VerticalCrypto Art.</li>
              <li>Use or attempt to use or access another person’s Wallet without authorization from such person.</li>
              <li>
                Take or attempt to take any action that in any way that could prevent, disrupt, negatively affect, or
                inhibit others from fully enjoying the Services, or that could alter, damage, disable, overburden, or
                impair the functioning of the Services in any manner. Collect, scrape, or harvest data from our
                Services.
              </li>
              <li>
                Engage in or knowingly facilitate any “front-running,” “wash trading,” “pump and dump trading,”
                “ramping,” “cornering,” or fraudulent, deceptive, or manipulative trading activities, including: (i) for
                the purpose of creating or inducing a false, misleading, or artificial appearance of activity or value
                in any NFT, facilitate the trading of such NFT at successively lower or higher prices or executing or
                causing the execution of any transaction involving the NFT which causes no material change in the
                beneficial ownership thereof; (ii) participating in, facilitating, assisting, or knowingly transacting
                with any person or persons for the purpose of artificially, unfairly, or deceptively influencing the
                market price of an NFT; or (iii) otherwise artificially, unduly, or improperly influencing the market
                price for any NFT available through the Services in any manner, including without limitation, on or
                through social media.
              </li>
              <li>
                Use the Services, Content, or VCA Genesis Membership NFTs to carry out financial activities subject to
                registration or licensing, including, without limitation, creating, listing, or buying securities,
                commodities, options, real estate, or debt instruments.
              </li>
            </ul>
            <h3>Account Security</h3>
            <p>
              You understand and agree that you are solely responsible for maintaining the security of your Wallets and
              each of your authentication credentials, seed phrases, private or public keys, NFTs, cryptocurrencies, and
              digital assets that are stored in or are accessible through your Wallet. Any unauthorised access to your
              Wallet by third parties may result in the loss or theft of your VCA Genesis Membership NFT(s) and/or other
              assets held in your wallet and any associated wallets, including any linked financial information such as
              bank account(s) or credit card(s). VerticalCrypto Art is not responsible for managing and maintaining the
              security of your Wallet and shall have no responsibility or liability to you for any unauthorised access
              to or use of your Wallet or your inability to access or use your Wallet for any reason. If you notice any
              unauthorised or suspicious activity in your Wallet that seems to be related to the Services, please notify
              us immediately.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of all accounts and passwords, if any, used by you
              in connection with the Services and are fully responsible for any and all activities that occur under your
              passwords or accounts. You agree to (a) immediately notify VerticalCrypto Art of any unauthorised use of
              your passwords or accounts or any other breach of security, and (b) ensure that you exit from your
              accounts at the end of each session when accessing the Services. VerticalCrypto Art will not be liable for
              any loss or damage arising from your failure to comply with this section.
            </p>
            <h3>Community Disputes</h3>
            <p>
              You agree that you are solely responsible for your interactions with other Users and Community Members in
              connection with the Services and VCA Genesis Membership NFTs, and that VerticalCrypto Art will have no
              liability or responsibility with respect thereto. VerticalCrypto Art reserves the right, but has no
              obligation, to become involved in any way with disputes between you and any other User or Community
              Member(s).
            </p>
            <h3>Export Controls and Sanctions</h3>
            <p>
              You acknowledge and understand that the Services and items offered through the Services, including NFTs,
              Digital Works, and Utility, are subject to U.K. export control and sanctions laws and regulations
              (collectively, the “Export Controls and Sanctions Laws”). You represent that you are not a Sanctioned
              Person and agree not to take any action that will cause anyone, including, without limitation,
              VerticalCrypto Art, to be in violation of any Export Controls and Sanctions Laws.
            </p>
            <p>
              For purposes of these Terms, “Sanctioned Person” means any government, country, corporation, or other
              entity, group, or individual with whom or which Export Controls and Sanctions Laws prohibit or restrict a
              U.K. person from engaging in transactions, and includes, without limitation, any individual, corporation,
              or other entity that appears on Specially Designated Nationals and Blocked Persons List or other lists
              maintained by U.K. government, as each such list may be amended from time to time.
            </p>
            <h3>Right to Suspend, Modify, or Terminate</h3>
            <p>
              VerticalCrypto Art may, from time to time, change or discontinue any or all aspects or features of the
              Services, including, without limitation, by (i) altering the smart contracts pursuant to upgrades, forks,
              security incident responses, or chain migrations or (ii) deactivating or deleting any media, Content, or
              portion of the Services in VerticalCrypto Art’s sole and absolute discretion. In such events, you may no
              longer be able to access, interact with, or read the data from the Services. VerticalCrypto Art has the
              right, but not the obligation, to remove or disable access to any listing or other portion, feature, or
              functionality of the Services at any time. VerticalCrypto Art reserves the absolute right, in its sole
              discretion, to allow or disallow, without limitation, certain assets, listings, smart contracts, and/or
              Collections.
            </p>
            VerticalCrypto Art may, from time to time, change or discontinue any or all aspects or features of the
            Services, including, without limitation, by (i) altering the smart contracts pursuant to upgrades, forks,
            security incident responses, or chain migrations or (ii) deactivating or deleting any media, Content, or
            portion of the Services in VerticalCrypto Art’s sole and absolute discretion. In such events, you may no
            longer be able to access, interact with, or read the data from the Services. VerticalCrypto Art has the
            right, but not the obligation, to remove or disable access to any listing or other portion, feature, or
            functionality of the Services at any time. VerticalCrypto Art reserves the absolute right, in its sole
            discretion, to allow or disallow, without limitation, certain assets, listings, smart contracts, and/or
            Collections.
            <p>
              Persons who tamper with or abuse any aspect of our Services, who act in a disruptive manner, or who are in
              violation of these Terms, as solely determined by VerticalCrypto Art, may be banned from participating in
              and/or accessing our Services.
            </p>
            <p>
              Should any of VerticalCrypto Art’s Services be, in VerticalCrypto Art’s sole opinion, compromised by bots,
              worms, bugs, non-authorized human intervention, or other causes which, in the sole opinion of
              VerticalCrypto Art, corrupt or impair the administration, security, or fairness of the Services or the
              distribution of the NFTs or otherwise adversely affect VerticalCrypto Art’s business or good will,
              VerticalCrypto Art reserves the right in its sole discretion to suspend, modify, or terminate the
              Services.
            </p>
            <h3>Investigations</h3>
            <p>
              If VerticalCrypto Art becomes aware of any possible violations by you of these Terms, VerticalCrypto Art
              reserves the right to investigate such violations. If, as a result of the investigation, VerticalCrypto
              Art believes that criminal activity may have occurred, VerticalCrypto Art reserves the right to refer the
              matter to, and to cooperate with, any and all applicable legal authorities. VerticalCrypto Art is
              entitled, except to the extent prohibited by applicable law, to disclose any information or materials on
              or in the Services in VerticalCrypto Art’s possession in connection with your use of the Services, to (i)
              comply with applicable laws, legal process, or governmental request; (ii) enforce these Terms, or (iii)
              protect the rights, property, or personal safety of VerticalCrypto Art, its affiliates, its users, the
              public, and all law enforcement or other government officials, as VerticalCrypto Art in its sole
              discretion believes to be necessary or appropriate.
            </p>
            <p>
              VerticalCrypto Art may require you to provide additional information and documents at the request of any
              competent authority or in order to help VerticalCrypto Art comply with applicable law, regulation, or
              policy, including laws related to anti-laundering (legalization) of incomes obtained by criminal means, or
              for counteracting financing of terrorism. VerticalCrypto Art may also require you to provide additional
              information and documents in cases where it has reasons to believe that:
            </p>
            <ul>
              <li>
                Your Wallet or other access to the Services is being used for money laundering or for any other illegal
                activity;
              </li>
              <li>You have concealed or reported false identification information and other details; or</li>
              <li>
                Transactions effected via your Wallet were effected in breach of these Terms or other applicable terms,
                laws, rules, covenants, orders, or regulations.
              </li>
            </ul>
            <p>
              In such cases, VerticalCrypto Art, in its sole discretion, may pause or cancel your transactions through
              our Services until such requested additional information and documents have been reviewed by
              VerticalCrypto Art and accepted as satisfying the requirements of applicable law, regulation, or policy.
              If you do not provide complete and accurate information and documents in response to such a request,
              VerticalCrypto Art may refuse to provide any Content, product, service and/or further access to the
              Services to you.
            </p>
            <h3>Assumption of Risk; Liability Waiver</h3>
            <p>By participating in the Services:</p>
            <ul>
              <li>
                You acknowledge and accept that transacting on a blockchain, including, without limitation, minting,
                bidding on, buying, or selling NFTs, contains inherent risk. Such risks include but are not limited to:
                (a) risk of sudden asset price changes; (b) risk of smart contract failure or exploit; (c) risk of
                hardware, software, or connectivity failure; (d) risk of malicious software; (e) risks of unauthorised
                access to your Wallet; (f) risk that you will no longer successfully retain ownership of or access to
                the NFT(s); (g) risk that any data or any Digital Work becomes unavailable or decoupled from the NFT,
                including, without limitation, because of an outage, data loss or pursuant to a valid Digital Millennium
                Copyright Act takedown procedure carried out in compliance with our Terms; (h) risk from regulatory
                inquiries, regulatory actions, legislation, or court rulings; and/or (i) risks, bugs, malfunctions,
                cyberattacks, or changes to a blockchain network (e.g., forks) or related technologies that disrupt or
                result in a total loss of NFTs, their market value, or digital funds.
              </li>
              <li>
                You acknowledge and accept these and all associated risks and responsibilities and agree that your
                participation in the Services is at your own risk. You should not participate in the Services, including
                to engage in blockchain-based transactions, unless it is suitable given your circumstances and financial
                resources.
              </li>
              <li>
                You agree that VerticalCrypto Art shall not be responsible or liable, directly or indirectly, for any
                damage or loss caused or alleged to be caused by or in connection with any of these risks.
              </li>
              <li>
                You acknowledge and accept that the sale of NFTs as part of the Services is facilitated and run by
                numerous third parties including, without limitation, your Wallet provider and one or more public
                peer-to-peer networks including, without limitation, the Ethereum network or other blockchain network
                and the Interplanetary File System (“IPFS”) or other distributed system for storing and accessing files
                or other data. None of these are under the control or influence of VerticalCrypto Art. VerticalCrypto
                Art shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged
                to be caused by or in connection with any third party, including, without limitation, lost, late,
                incomplete, damaged, delayed, inaccurate, stolen, misdirected, undelivered, or garbled NFTs, or for
                errors or difficulties of any kind related thereto, whether human, mechanical, electronic, computer,
                network, typographical, or otherwise. Transactions are publicly visible on the Ethereum or other
                applicable blockchain when made.
              </li>
              <li>
                You acknowledge and agree that VerticalCrypto Art is not a fiduciary and owes no duties to you,
                including the duty to ensure fair pricing of the NFT.
              </li>
              <li>
                You agree to bear sole responsibility for paying any and all taxes, duties, and assessments payable as
                the result of purchase, ownership, sale, transfer, use and/or exploitation of any NFT.
              </li>
              <li>
                You expressly agree that the release and waiver of liability contained herein is intended to be as broad
                and as inclusive as is permitted by applicable law and that if any portion hereof is held invalid, it is
                agreed that the balance shall, notwithstanding, continue in full legal force and effect.
              </li>
            </ul>
            <p>
              YOU ACKNOWLEDGE AND AGREE THAT THESE TERMS DO NOT REPRESENT A COMPLETE STATEMENT OF RISK FACTORS
              ASSOCIATED WITH DIGITAL ASSETS, PRODUCTS OR EXPERIENCES THAT MAY BE AVAILABLE OR DISCUSSED IN CONNECTION
              WITH THE SERVICES, OR UTILITY AVAILABLE TO COMMUNITY MEMBERS.
            </p>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL VCA, VCA’S AFFILIATES OR ANY OF THEIR RESPECTIVE
              MEMBERS, EMPLOYEES, OFFICERS, AGENTS, REPRESENTATIVES, SUCCESSORS OR ASSIGNS (“VerticalCrypto Art
              PARTIES”) BE LIABLE TO YOU FOR ANY LOSS, DAMAGE, OR INJURY OF ANY KIND INCLUDING, WITHOUT LIMITATION, ANY
              DIRECT, INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE LOSSES OR DAMAGES, OR DAMAGES
              FOR SYSTEM FAILURE OR MALFUNCTION OR LOSS OF PROFITS, DATA, USE, BUSINESS, OR GOOD-WILL OR OTHER
              INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES. IN NO EVENT WILL THE
              VerticalCrypto Art PARTIES’ CUMULATIVE LIABILITY TO YOU OR ANY OTHER PERSON OR ENTITY, FROM ALL CAUSES OF
              ACTION AND ALL THEORIES OF LIABILITY, EXCEED THE TOTAL AMOUNTS PAID BY YOU TO THE VerticalCrypto Art
              PARTIES IN CONNECTION WITH THE SERVICES IN THE PAST TWELVE MONTHS FOR THE SERVICES GIVING RISE TO THE
              CLAIM.
            </p>
            <p>
              UNDER NO CIRCUMSTANCES SHALL ANY VERTICALCRYPTO ART PARTY BE REQUIRED TO DELIVER TO YOU ANY VIRTUAL
              CURRENCY AS DAMAGES, MAKE SPECIFIC PERFORMANCE, OR ANY OTHER REMEDY. IF YOU WOULD BASE YOUR CALCULATIONS
              OF DAMAGES IN ANY WAY ON THE VALUE OF VIRTUAL CURRENCY, YOU AND WE AGREE THAT THE CALCULATION SHALL BE
              BASED ON THE LOWEST VALUE OF THE VIRTUAL CURRENCY DURING THE PERIOD BETWEEN THE INITIAL INCIDENT RESULTING
              IN THE ACCRUAL OF THE CLAIM AND THE AWARD OF DAMAGES.
            </p>
            <p>
              THIS LIMITATION OF LIABILITY IS INTENDED TO APPLY WITHOUT REGARD TO WHETHER OTHER PROVISIONS OF THESE
              TERMS HAVE BEEN BREACHED OR HAVE PROVEN INEFFECTIVE. THE LIMITATIONS SET FORTH IN THIS SECTION SHALL APPLY
              REGARDLESS OF THE FORM OF ACTION, WHETHER THE ASSERTED LIABILITY OR DAMAGES ARE BASED ON CONTRACT,
              INDEMNIFICATION, TORT, STRICT LIABILITY, STATUTE, OR ANY OTHER LEGAL OR EQUITABLE THEORY AND WHETHER OR
              NOT THE VERTICALCRYPTO ART PARTIES HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE.
            </p>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES AND LIABILITIES PROVIDED
              IN THIS SECTION, SO SOME OF THE ABOVE LIMITATIONS AND DISCLAIMERS MAY NOT APPLY TO YOU. TO THE EXTENT
              APPLICABLE LAW DOES NOT PERMIT VERTICALCRYPTO ART PARTIES TO DISCLAIM CERTAIN WARRANTIES OR LIMIT CERTAIN
              LIABILITIES, THE EXTENT OF VERTICALCRYPTO ART PARTIES’ LIABILITY AND THE SCOPE OF ANY SUCH WARRANTIES WILL
              BE AS PERMITTED UNDER APPLICABLE LAW.
            </p>
            <h3>Indemnification</h3>
            <p>
              To the fullest extent permitted by applicable law, you agree to indemnify, defend, and hold harmless
              VerticalCrypto Art and the VerticalCrypto Art Parties from and against all actual or alleged third party
              claims, damages, awards, judgments, losses, liabilities, obligations, penalties, interest, fees, expenses
              (including, without limitation, attorneys’ fees and expenses), and costs (including, without limitation,
              court costs, costs of settlement, and costs of or associated with pursuing indemnification and insurance),
              of every kind and nature whatsoever arising out of or related to these Terms or your use of the Services,
              whether known or unknown, foreseen or unforeseen, matured or unmatured, or suspected or unsuspected, in
              law or equity, whether in tort, contract or otherwise (collectively, “Claims”) that are caused by, arise
              out of, or are related to (a) your use or misuse of the Services, (b) your violation of these Terms; (c)
              your violation of the rights of any third party, including another user of any Wallet; (d) any breach or
              non-performance of any representation, warranty, covenant, or agreement made by you; and (e) your buying,
              selling, or trading of any NFTs.
            </p>
            <h3>Governing Law</h3>
            <p>
              These Terms will be governed by the laws of England and Wales, without regard to conflict of law
              provisions.{" "}
            </p>
            <h3>Limitation of Actions</h3>
            <p>
              You and we agree that regardless of any statute or law to the contrary, any claim or cause of action
              arising from or relating to these Terms or the Services must be filed within one (1) year after such claim
              or cause of action arose, or will be forever barred.
            </p>
            <h3>Severability</h3>
            <p>
              Should any portion of these Terms be rendered void, invalid, or unenforceable by any court of competent
              jurisdiction, the remaining provisions shall nevertheless be binding upon the parties.
            </p>
            <h3>Survival</h3>
            <p>
              Any provision of these Terms that by its nature would extend beyond its expiration or termination shall
              remain in effect in perpetuity or until fulfilled.
            </p>
            <h3>Contact Information</h3>
            <p>
              If you have any questions, would like to provide feedback, or would like more information about
              VerticalCrypto Art, please feel free to email us at info@verticalcrypto.art.
            </p>
          </div>
        </div>
        <div className="footer-modal">
          <button
            onClick={() => {
              setOpenModalToc(false);
            }}
          >
            ← Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalToc;
