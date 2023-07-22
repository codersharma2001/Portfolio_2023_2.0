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
    cryptocanvas,
    dexify,
    blockify,
    arctoken,
    g20meta,
    threejs,
    ethereum,
    mayank,
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
      title: "Smart Contract Developement",
      icon: web,
    },
    {
      title: "Defi Specialist",
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
      title: "Full-Stack Blockchain Developer",
      company_name: "Web3Nest Metaverse Private Limited",
      icon: web3nest,
      iconBg: "#383E56",
      date: "Mar 2023 - Present",
      points: [
        "NFT Ticket Generator: Created an automated application using React.js, Nodemailer, and Hardhat to extract user data from an xlsx file, mint Soul Bound Tokens (SBTs), list them on polygonscan, and send corresponding ticket PDFs to users via email.",
        "Multi-Metaverse: Developed captivating metaverses by leveraging cutting-edge libraries such as THREE.js and Cesium.js. Incorporated interactive elements and Readyplayer.me avatars to contribute to the G20 Global Summit and sustainability efforts.",
        "GTL Mobile App: Utilized the Drips protocol to enable seamless token streaming of SEVA tokens to users' wallets, while gamifying the experience and promoting sustainability. Developed a landing page using React.js and Web3.js for SEVA token minting.",
        "Extraction and Tokenization: Automated extraction of user data from an xlsx file and tokenized each user's information into Soul Bound Tokens (SBTs) using the NFT Ticket Generator application.",
        "Integration and Distribution: Integrated the generated SBTs into the metaverses created with THREE.js and Cesium.js for immersive experiences. Distributed the SBTs and corresponding ticket PDFs to users' email addresses using Nodemailer.",
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "Techlene Software Solution Pvt. Ltd.",
      icon: techlene,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Oct 2022 ",
      points: [
        "Worked as a blockchain developer, specializing in advanced Solidity programming for developing complex smart contracts on various blockchain platforms.",
        "Played a crucial role as part of a team in building ERC-20 and ERC-721 tokens, which are standard token protocols on the Ethereum blockchain. These tokens were used to create an NFT marketplace, providing a platform for trading and showcasing unique digital assets.",
        "Contributed to the development of an NFT marketplace by leveraging ERC-20 and ERC-721 tokens. This involved implementing the necessary functionalities for buying, selling, and transferring NFTs, as well as integrating features like auctions and royalty mechanisms.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  
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
  ];
  
  export { services, technologies, experiences, testimonials, projects , profilepic};