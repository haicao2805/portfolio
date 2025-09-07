import { TExperience } from '../types';
import { Skills } from './skills';

// Note: You may need to add these skills to your Skills enum if they don't exist:
// LOOPBACK_4, POSTGRESQL, REDIS, BULLMQ, GRPC, DOCKER, NGINX, WEBSOCKET, MINIO,
// CASBIN, MEILISEARCH, GRAFANA, PROMETHEUS, UDP, SQLITE, FIREBASE_MESSAGING,
// SUPABASE, SOLIDITY, EXPRESS, MONGODB, REACT_NATIVE

export const workExperienceData: TExperience[] = [
  {
    id: 'minimal_technology',
    company: {
      name: 'Minimal Technology',
      location: 'Ho Chi Minh City, Vietnam',
      periodFrom: 'Jan 2024',
      periodTo: 'Aug 2025',
    },
    positions: [
      {
        id: 'fullstack_developer',
        title: 'Full-stack Developer',
        periodFrom: 'Jan 2024',
        periodTo: 'Aug 2025',
        type: 'Full-time',
        isExpanded: true,
        descriptions: [
          'Solo-architected risk management system protecting trading capital through automated monitoring and alert mechanisms in 2 months',
          'Reduced ERP development cycles by 75% (1-2 months to 1-2 weeks) by refactoring and standardization',
          'Automated 1-week manual workflow into 10-minute operation processing 1M+ records monthly',
          'Developed real-time risk engines with configurable interval evaluation and multi-step validation workflow',
          'Built comprehensive P&L calculators with multiple strategies for accurate risk assessment',
          'Pioneered LoopBack 4 integration in Electron main process for cross-platform cryptocurrency trading desktop application',
          'Implemented worker thread architecture for real-time data processing during high-frequency trading operations',
          'Led complete refactoring of large-scale monolithic ERP system with 100+ PostgreSQL tables',
          'Implemented Role-Based Access Control system using Casbin authorization framework for 900+ endpoints',
          'Engineered high-performance data pipeline processing 1M+ monthly records with optimized database operations',
        ],
        skills: [
          Skills.TYPESCRIPT,
          Skills.JAVASCRIPT,
          // Skills.LOOPBACK_4,
          // Skills.POSTGRESQL,
          // Skills.REDIS,
          // Skills.BULLMQ,
          Skills.REACT_JS,
          Skills.ELECTRON_JS,
          // Skills.WEBSOCKET,
          // Skills.SQLITE,
          // Skills.GRPC,
          // Skills.DOCKER,
          // Skills.NGINX,
          // Skills.MINIO,
          // Skills.CASBIN,
          // Skills.MEILISEARCH,
          // Skills.GRAFANA,
          // Skills.PROMETHEUS,
          Skills.RXJS,
          // Skills.UDP,
          // Skills.FIREBASE,
        ],
      },
    ],
  },
  {
    id: 'comic_one',
    company: {
      name: 'Comic One',
      location: 'Ho Chi Minh City, Vietnam',
      periodFrom: 'Sep 2022',
      periodTo: 'Aug 2023',
    },
    positions: [
      {
        id: 'fullstack_developer_comic',
        title: 'Full-stack Developer',
        periodFrom: 'Sep 2022',
        periodTo: 'Aug 2023',
        type: 'Full-time',
        descriptions: [
          'Developed smart contracts and NFT marketplace functionality using Solidity for crypto-comic platform',
          'Implemented Docker containerization and Nginx load balancing for scalable production deployments',
          'Built comprehensive crypto-comic NFT platform with blockchain integration',
        ],
        skills: [
          Skills.TYPESCRIPT,
          // Skills.NEXT_JS, // Assuming you have this
          // Skills.TAILWIND_CSS, // Assuming you have this
          // Skills.SUPABASE,
          // Skills.SOLIDITY,
          // Skills.DOCKER,
          // Skills.NGINX,
        ],
      },
    ],
  },
  {
    id: 'dayone_software',
    company: {
      name: 'DayOne Software Technology',
      location: 'Ho Chi Minh City, Vietnam',
      periodFrom: 'Dec 2021',
      periodTo: 'May 2022',
    },
    positions: [
      {
        id: 'software_engineer_intern',
        title: 'Software Engineer Intern/Backend Developer',
        periodFrom: 'Dec 2021',
        periodTo: 'May 2022',
        type: 'Internship',
        descriptions: [
          'Built RESTful API using Express and MongoDB for iOS/Android applications',
          'Implemented Firebase Cloud Messaging for push notification systems',
          'Self-learned React/React Native to contribute to frontend development initiatives',
          'Developed cross-platform mobile application backend supporting both iOS and Android',
        ],
        skills: [
          Skills.JAVASCRIPT,
          Skills.EXPRESS,
          Skills.MONGODB,
          // Skills.FIREBASE_MESSAGING,
          Skills.REACT_JS,
          // Skills.REACT_NATIVE,
        ],
      },
    ],
  },
];
