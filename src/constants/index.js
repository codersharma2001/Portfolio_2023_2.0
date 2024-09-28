import {
    mobile,
    backend,
    creator,
    web,
    cpp,
    ethers,
    reactjs,
    hyperledger,
    polygon,
    nodejs,
    hardhat,
    git,
    solidity,
    truffle,
    web3nest,
    techlene,
    zuraverse,
    cryptocanvas,
    dexify,
    blockify,
    arctoken,
    g20meta,
    threejs,
    ethereum,
    mayank,
    velvet,
    stakeflow,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Smart Contract Developement & Testing",
      icon: web,
    },
    {
      title: "Smart Contract Auditing",
      icon: mobile,
    },
    {
      title: "Full-Stack DApps Development",
      icon: backend,
    },
    {
      title: "Metaverse Creation",
      icon: creator,
    },
  ];
  
  const profilepic = [
    {
      name : "Mayank",
      icon : mayank
    }
  ]
  const technologies = [
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "Hardhat",
      icon: hardhat,
    },
    {
      name: "ThreeJS",
      icon: threejs,
    },
    {
      name: "Truffle",
      icon: truffle,
    },
    {
      name: "Ethereum",
      icon: ethereum,
    },
    {
      name: "Polygon",
      icon: polygon,
    },
    {
      name: "Hyperledger Fabric",
      icon: hyperledger,
    },
    {
      name: "EthersJS",
      icon: ethers,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    },
    
  ];
  
  const experiences = [
    {
      title: "Blockchain Developer",
      company_name: "Velvet Capital",
      icon: velvet, // Add appropriate icon import if available
      iconBg: "#000000", // Adjust color as needed
      date: "Jan 2024 - September 2024",
      points: [
        "Developed a solver prototype utilizing the Uniswap X SDK, focusing on efficient integration with proprietary systems.",
        "Implemented Permit2 Signature-based transactions to enhance security and performed single approval based transaction on solver.",
        "Integrated multiple exchange handlers (e.g., Paraswap, ZeroX, 1inch) into the central server to optimize pricing strategies, creating their calldata and performing the integration with JAM settlement contract for executing the transaction.",
        "Writing the Swap Contract and integrating into the server, performing the capital flow, to make capital from the solver.",
        "Enhanced Central Server’s performance by integrating Expand Network for optimal price fetching from liquidity pools and simulating bundled transactions using platforms like Tenderly and Enso.",
        "Optimized transaction fees and server code, including thorough testing of handler APIs and improving gas efficiency through targeted API usage.",
        "Being part of Building the CoW Swap Solver, framing the flow and mechanism, along with algorithm of solving batch-orders.",
        "Performed Unit-testing, Integration-testing and E2E Testing for the server code.",
        "Performed the code conversion for the central-server to C++ and Rust for low latency and fast response to win as many trades possible.",
      ],
    },
    {
      title: "Full-Stack Blockchain Developer",
      company_name: "Zuraverse Play-Earn-Conserve Pvt. Ltd.",
      icon: zuraverse,
      iconBg: "#000000",
      date: "August 2023 - December 2023",
      points: [
        "Led the development of Virtual Forest, building Smart Contracts and integrating Chainlink oracles for continuous offchain weather data.",
        "Built the Karma Token (ERC 1155) and integrated it into the Virtual Forest as a reward token.",
        "Developed Smart Contracts for the Zura Marketplace, performed testing and integration, and handled account abstraction.",
        "Conducted extensive research on Toucan Protocol, Carbon Offset, and ReFi for future implementation in Virtual Forest.",
      ],
    },
    {
      title: "Full-Stack Blockchain Developer",
      company_name: "Web3Nest Metaverse Private Limited",
      icon: web3nest,
      iconBg: "#383E56",
      date: "Mar 2023 - August 2023",
      points: [
        "Developed GTL (Global Treeball League), a fullstack DApp (React.js + TailwindCSS) that generates NFT (ERC-721) tickets for new users, integrating a metaverse to plant trees in a 3D environment linked to actual coordinates via metadata.",
        "Designed the 3D metaverse environment using THREE.js and Cesium.js for the G20 Global Summit initiative integrated with the GTL DApp.",
        "Contributed to the GTL Mobile App, implementing the Drips protocol for SEVA token (Soulbound Tokens - SBTs) as a reward token, enabling seamless streaming to player's wallets and developing an algorithm for efficient gameplay, allowing users to claim Carbon Credits in exchange for SEVA tokens.",
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "Techlene Software Solution Pvt. Ltd.",
      icon: techlene,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Oct 2022 ",
      points: [
        "Built and deployed an NFT marketplace with advanced smart contracts (ERC-20, ERC-721, and ERC-1155), featuring batch transfers, fractional ownership, royalties, and on-chain metadata for better user experience.",
        "Integrated and tested contracts using Hardhat while building the frontend with Next.js and ethers.js, enabling real-time blockchain updates, wallet authentication, and dynamic NFT pricing.",
      ],
    }
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    
    {
      name: "Crypto Canvas",
      description:
        "I have developed an NFT marketplace using Hardhat for NFT minting on a local testnet. The frontend is built with ReactJS. IPFS is used for storing NFTs and user data. I used Node.js and npm packages to create the API and fetch data from the Infura IPFS database.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "hardhat",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: cryptocanvas,
      source_code_link: "https://github.com/codersharma2001/CryptoCanvas",
    },
    {
      name: "DeXify",
      description:
        "I've built a fully functional decentralized exchange using Cranq for smart contract development and deployed it on Georli-testnet. With React and Tailwind CSS, users can easily swap tokens from liquidity pools. Enjoy seamless token exchanges!",
      tags: [
        {
          name: "cranq",
          color: "pink-text-gradient",
        },
        {
          name: "web3.js",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: dexify,
      source_code_link: "https://github.com/codersharma2001/DeXify",
    },
    {
      name: "Arktoken",
      description:
        "Arktoken is a secure and fast web3 transaction platform for transferring funds between users. It uses Reactjs for the frontend and stores all transactions on the blockchain using hardhat env. and nodejs for the backend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hardhat",
          color: "green-text-gradient",
        },
        {
          name: "ethersJS",
          color: "pink-text-gradient",
        },
      ],
      image: arctoken,
      source_code_link: "https://github.com/codersharma2001/Arktoken-A-Web3-Transaction-Hub",
    },
    {
      name: "The G20 Metaverse",
      description:
        "This is the G20 Metaverse , that I have built for my internship at Web3Nest with their collaboration with Ministry of Forest for their contribution towards the sustainability of nature .",
      tags: [
        {
          name: "threeJS",
          color: "green-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
       
      ],
      image: g20meta,
      source_code_link: "https://github.com/codersharma2001/G20-metaverse",
    },
    
    {
      name: "Blockify",
      description:
        "Blockify is a Decentralized NFT Musicplayer that use IPFS to store the music file and uses APIs to fetch our music NFT from Opensea and plays it on our application.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "IPFS",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image: blockify,
      source_code_link: "https://github.com/codersharma2001/Blockify",
    },
    {
      name: "StakeFlow",
      description:
        "A user-friendly staking DApp on Ethereum that lets you easily connect your wallet, stake or withdraw tokens, and track your rewards in real-time. With smooth animations, responsive design, and instant notifications, it's built to make staking simple and engaging.",
      tags: [
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "ethers.js",
          color: "pink-text-gradient",
        },
      ],
      image: stakeflow, // Add appropriate image import if available
      source_code_link: "https://github.com/codersharma2001/StakeFlow", // Add the source code link if available
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects , profilepic};
