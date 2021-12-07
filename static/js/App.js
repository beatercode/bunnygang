import React, {
    useEffect
} from "react";
import "./App.css";
import {
    useDispatch,
    useSelector
} from "react-redux";
import * as s from "./styles/globalStyles";
import {
    Hero,
    Footer
} from "./pages/index";
import {
    Roadmap,
    Faq,
    Rarities,
    TeamA,
    Navbar,
    Terms,
    Stories,
    Marketplace,
    Collectionpage,
    MyWallet,
} from "./components/index";
import ScrollToTop from "react-scroll-to-top";
import {
    TriangleUpIcon
} from "@chakra-ui/icons";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ScrollToTopRouting from "./components/ScrollToTop";
import MyBunnies from "./pages/MyBunnies/MyBunnies";
import Rare from "./pages/Rare/Rare";
import {
    fetchMarketplaceData
} from "./redux/marketplace/marketplaceActions";
import {
    COLLECTIONS
} from "./components/Marketplace/Collections";

function App() {
    // const dispatch = useDispatch();
    // const blockchain = useSelector((state) => state.blockchain);
    // eslint-disable-next-line no-unused-vars
    const data = useSelector((state) => state.data);

    const roadmap = [{
            title: "1 ETH Giveaway",
            description: "We will send 1 ETH to 1 OG Bunnies, in order to thanks our first supporters.",
            date: "10%",
        },
        {
            title: "The Bunny Gang Leader Election ",
            description: "Each Bunny holders will vote for a gang leader. 4 exclusive NFT will be giveaway to the elected, attributes and names will be selected by the community.",
            date: "20%",
        },
        {
            title: "The Bunny Gang Contest",
            description: "This is a contest between each gang on Discord, victorious gang will see 2 NFTs sent to its team.",
            date: "30%",
        },
        {
            title: "Gen2 Bunnies Drop to Holders ",
            description: "Full on-chain NFTs dropped to holders (SVG format), these new bunnies will respect attributes of the previous ones.",
            date: "40%",
        },
        {
            title: "The Bunny Gang Metaverse",
            description: "Discover the Metaverse of the Bunny Gang, each gang control a territory respecting style and traditions of their ancesters.",
            date: "50%",
        },
        {
            title: "The Bunny Gang Marketplace",
            description: "You'll be able to trade Gen1 & Gen2 Bunnies, get to know The Bunny Gang City and start getting some territory.",
            date: "60%",
        },
        {
            title: "DAO Governance token",
            description: "As we aim to make our project bigger and bigger respecting the community choice, we will introduce the $BUNNY governance token",
            date: "70%",
        },
        {
            title: "The Bunny Gang Goodies",
            description: "We will design a large stock of Bunny Goodies, it will include T-shirt, Hoodies, socks, Mug, Stickers etc...",
            date: "80%",
        },
        {
            title: "Charity Donations",
            description: "The crisis has affected everyone. Associations and foundations have not been spared. A donation could be a good gesture of solidarity in times of crisis. In the end, we are all in the same boat. The charity will be chosen by a poll between holders.",
            date: "90%",
        },
        {
            title: "The Bunny Gang Game development",
            description: "Strategic territory control game where 4 Bunny Gangs are fighting. The Bunnies can attack a territory, form clans and showing who has the control over the Town. Game will be made using Unity3D and some Recruitment will be made to create the next generation Metaverse.",
            date: "100%",
        },
    ];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMarketplaceData());
    }, [dispatch]);

    <
    script src = 'https://unpkg.com/aos@2.3.1/dist/aos.js' > < /script>;

    return ( <
        Router >
        <
        s.Screen >
        <
        Navbar / >
        <
        ScrollToTop smooth component = { < TriangleUpIcon color = 'var(--white)' / >
        }
        style = {
            {
                backgroundColor: "var(--red)"
            }
        }
        /> <
        ScrollToTopRouting / >
        <
        Switch >
        <
        Route exact path = '/' >
        <
        Hero / >
        <
        Stories / >
        <
        Rarities / >
        <
        Roadmap items = {
            roadmap
        }
        /> <
        Faq / >
        <
        TeamA / >
        <
        /Route> <
        Route exact path = '/terms' >
        <
        Terms / >
        <
        /Route> <
        Route exact path = '/my-bunnies' >
        <
        MyBunnies / >
        <
        /Route> <
        Route exact path = '/marketplace' >
        <
        Marketplace / >
        <
        /Route> <
        Route exact path = '/marketplace/wallet' >
        <
        MyWallet / >
        <
        /Route> <
        Route exact path = '/marketplace/bunnygang' >
        <
        Collectionpage currentCollection = {
            COLLECTIONS[0]
        }
        /> <
        /Route> <
        Route exact path = '/marketplace/yaybears' >
        <
        Collectionpage currentCollection = {
            COLLECTIONS[1]
        }
        /> <
        /Route> <
        Route exact path = '/attributes' >
        <
        Rare / >
        <
        /Route> <
        /Switch> <
        Footer / >
        <
        /s.Screen> <
        /Router>
    );
}

export default App;