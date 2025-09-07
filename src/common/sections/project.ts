import { IProject } from '../types';
import { Skills } from './skills';

// --------------------------------------------------
export const projectData: IProject[] = [
  {
    id: 'crypto-risk-management',
    title: 'Crypto Trading Risk Management System',
    periodFrom: 'Apr 2025',
    periodTo: 'Aug 2025',
    description: 
      'Solo-developed real-time risk management system protecting trading capital through automated monitoring and alert mechanisms.',
    role: 'Backend Engineer (Solo Project).',
    responsibilities: [
      `Independently developed and deployed risk management system in <b>2 months</b>, protecting company trading capital and reducing manual oversight by <b>80%</b>.`,
      `Built real-time risk engines with configurable interval evaluation processing, implementing multi-step validation workflow including connection health checks, throttle time validation, and dynamic rule evaluation.`,
      `Developed highly customizable alert configuration system enabling administrators to define flexible risk rules including stop-loss thresholds, force close percentages, auto/manual execution modes.`,
      `Built comprehensive P&L calculators with multiple strategies including oldest-first, newest-first, proportional, most-loose, and most-win methodologies for accurate risk assessment.`,
      `Implemented multi-level strategies with granular control across position, account, and user hierarchies.`,
    ],
    skills: [
      // Skills.LOOPBACK_4,
      // Skills.POSTGRESQL,
      // Skills.BULLMQ,
      // Skills.REDIS,
      // Skills.GRPC,
      // Skills.DOCKER,
      // Skills.NGINX,
      Skills.TYPESCRIPT,
    ],
    logo: `/projects/crypto-risk/logo.png`,
    images: [
      {
        id: 'crypto-risk-1',
        src: `/projects/crypto-risk/dashboard.png`,
        alt: `Risk Management Dashboard`,
      },
      {
        id: 'crypto-risk-2',
        src: `/projects/crypto-risk/alert_config.png`,
        alt: `Alert Configuration Panel`,
      },
    ],
    isExpanded: true,
  },
  {
    id: 'mirae-market-data',
    title: 'Mirae Asset Sub-Account System - Market Data Migration',
    periodFrom: 'Jun 2025',
    periodTo: 'Aug 2025',
    description: 
      'Real-time market data processing system capturing and transforming UDP packets from KRX system.',
    role: 'Backend Developer.',
    responsibilities: [
      `Developed UDP packet processor to capture and transform real-time market data from the KRX system.`,
      `Ensured compatibility with legacy infrastructure and existing sub-accounts through data transformation layer.`,
      `Built deployment environment including instance allocation, load balancing configuration, and automated deployment scripts.`,
      `Implemented high-performance data streaming for financial market data processing.`,
    ],
    skills: [
      // Skills.LOOPBACK_4,
      // Skills.UDP,
      // Skills.DOCKER,
      // Skills.NGINX,
      Skills.TYPESCRIPT,
    ],
    logo: `/projects/mirae-asset/logo.png`,
    images: [
      {
        id: 'mirae-1',
        src: `/projects/mirae-asset/data_flow.png`,
        alt: `Market Data Flow Diagram`,
      },
    ],
  },
  {
    id: 'crypto-desktop-app',
    title: 'Crypto Trading Desktop Application',
    periodFrom: 'Jan 2025',
    periodTo: 'Apr 2025',
    description: 
      'Cross-platform cryptocurrency trading desktop application with real-time data processing and system monitoring.',
    role: 'Full-stack Developer.',
    responsibilities: [
      `Pioneered LoopBack 4 integration in Electron main process, establishing foundational architecture for cross-platform cryptocurrency trading desktop application in <b>3 months</b>.`,
      `Created declarative IPC system using TypeScript decorators, transforming complex Electron patterns into maintainable REST-like interfaces.`,
      `Developed SQLite connector for team workflow consistency by providing compatibility with LoopBack 4 and including migration support.`,
      `Implemented worker thread architecture for real-time data processing, isolating market data handling from main process to prevent blocking during high-frequency trading.`,
      `Integrated Grafana and Prometheus for system metrics visualization with AlertManager configured for automated alerts via Telegram.`,
      `Built administrative interface for resource management, trader administration, system operations oversight, and risk management with integrated lightweight charting components.`,
    ],
    skills: [
      // Skills.LOOPBACK_4,
      Skills.ELECTRON_JS,
      Skills.REACT_JS,
      Skills.TYPESCRIPT,
      // Skills.WEBSOCKET,
      // Skills.SQLITE,
      // Skills.REDIS,
      // Skills.GRAFANA,
      // Skills.PROMETHEUS,
    ],
    logo: `/projects/crypto-desktop/logo.png`,
    images: [
      {
        id: 'crypto-desktop-1',
        src: `/projects/crypto-desktop/trading_interface.png`,
        alt: `Trading Interface`,
      },
      {
        id: 'crypto-desktop-2',
        src: `/projects/crypto-desktop/admin_panel.png`,
        alt: `Admin Panel`,
      },
      {
        id: 'crypto-desktop-3',
        src: `/projects/crypto-desktop/monitoring.png`,
        alt: `System Monitoring Dashboard`,
      },
    ],
    isExpanded: true,
  },
  {
    id: 'samick-erp-refactor',
    title: 'Enterprise ERP Refactoring - Samick Furniture',
    periodFrom: 'Mar 2024',
    periodTo: 'Jan 2025',
    description: 
      'Complete refactoring of large-scale monolithic ERP system with 100+ PostgreSQL tables, transforming legacy codebase into maintainable architecture.',
    role: 'Backend Developer.',
    responsibilities: [
      `Led complete refactoring of large-scale monolithic ERP system for Samick Furniture with <b>100+ PostgreSQL tables</b>.`,
      `Transformed poorly structured codebase from previous development teams into maintainable and standardized architecture.`,
      `Reduced new module development time from <b>1-2 months to 1-2 weeks</b> through architectural standardization and code optimization.`,
      `Implemented custom denormalization strategy using JSONB metadata columns for high-traffic data models, enabling simpler queries without additional search engines.`,
      `Built Role-Based Access Control system using Casbin authorization framework with complex PostgreSQL Views supporting <b>900+ endpoints RestAPI</b>.`,
      `Developed hierarchical role inheritance and flexible resource-action-based authorization patterns.`,
    ],
    skills: [
      // Skills.LOOPBACK_4,
      // Skills.POSTGRESQL,
      // Skills.MINIO,
      // Skills.BULLMQ,
      // Skills.DOCKER,
      // Skills.NGINX,
      // Skills.CASBIN,
      Skills.TYPESCRIPT,
    ],
    logo: `/projects/samick-erp/logo.png`,
    images: [
      {
        id: 'samick-erp-1',
        src: `/projects/samick-erp/architecture.png`,
        alt: `System Architecture`,
      },
      {
        id: 'samick-erp-2',
        src: `/projects/samick-erp/rbac_system.png`,
        alt: `RBAC Authorization System`,
      },
    ],
  },
  {
    id: 'studio-samick-data',
    title: 'Data Processing System - Studio Samick',
    periodFrom: 'Mar 2024',
    periodTo: 'Jan 2025',
    description: 
      'High-performance data pipeline processing over 1M records monthly, automating manual workflows.',
    role: 'Backend Developer.',
    responsibilities: [
      `Engineered high-performance data pipeline that reduced a <b>1-week manual processing workflow to automated 10-minute operation</b>, processing over <b>1M records monthly</b>.`,
      `Developed data pipeline using task queue design pattern with BullMQ, file streaming technique from Minio storage.`,
      `Implemented automated Excel-to-CSV conversion using containerized LibreOffice and optimized database operations with concurrent processing.`,
      `Engineered complex bargain price calculation with multiple priority levels, time-based rules and various product types across different shopping malls.`,
      `Designed advanced PostgreSQL queries to generate Materialized Views and applied debouncing technique with RxJS, achieving <b>millisecond-level query speeds</b>.`,
    ],
    skills: [
      // Skills.LOOPBACK_4,
      // Skills.POSTGRESQL,
      // Skills.MINIO,
      // Skills.BULLMQ,
      Skills.RXJS,
      // Skills.MEILISEARCH,
      // Skills.DOCKER,
      // Skills.NGINX,
      Skills.TYPESCRIPT,
    ],
    logo: `/projects/studio-samick/logo.png`,
    images: [
      {
        id: 'studio-samick-1',
        src: `/projects/studio-samick/data_pipeline.png`,
        alt: `Data Processing Pipeline`,
      },
      {
        id: 'studio-samick-2',
        src: `/projects/studio-samick/performance_metrics.png`,
        alt: `Performance Metrics Dashboard`,
      },
    ],
  },
  {
    id: 'mt-hr-system',
    title: 'MT Human Resource Management System',
    periodFrom: 'Jan 2024',
    periodTo: 'Feb 2024',
    description: 
      'Comprehensive HR management system with workflow automation and Firebase-based notifications.',
    role: 'Full-stack Developer.',
    responsibilities: [
      `Implemented Firebase-based notification system for HR processes including approval workflows and automated announcements.`,
      `Developed configurable management module for HR policies including leave management and attendance tracking.`,
      `Built automated workflow system streamlining HR operations and employee management processes.`,
    ],
    skills: [
      // Skills.LOOPBACK_4,
      // Skills.POSTGRESQL,
      // Skills.FIREBASE_MESSAGING,
      Skills.REACT_JS,
      // Skills.REACT_ADMIN,
      // Skills.FIREBASE,
      Skills.TYPESCRIPT,
    ],
    logo: `/projects/mt-hr/logo.png`,
    images: [
      {
        id: 'mt-hr-1',
        src: `/projects/mt-hr/dashboard.png`,
        alt: `HR Dashboard`,
      },
    ],
  },
  {
    id: 'crypto-comic-nft',
    title: 'Crypto-Comic NFT Platform',
    periodFrom: 'Sep 2022',
    periodTo: 'Aug 2023',
    description: 
      'Blockchain-based NFT marketplace platform for crypto-comic trading with smart contract integration.',
    role: 'Full-stack Developer.',
    responsibilities: [
      `Developed smart contracts and NFT marketplace functionality using Solidity for crypto-comic platform.`,
      `Built comprehensive blockchain integration enabling secure NFT trading and ownership verification.`,
      `Implemented Docker containerization and Nginx load balancing for scalable production deployments.`,
      `Created user-friendly interface for NFT minting, trading, and portfolio management.`,
    ],
    skills: [
      // Skills.NEXT_JS,
      // Skills.TAILWIND_CSS,
      // Skills.SUPABASE,
      // Skills.SOLIDITY,
      // Skills.DOCKER,
      // Skills.NGINX,
      Skills.TYPESCRIPT,
      Skills.REACT_JS,
    ],
    logo: `/projects/crypto-comic/logo.png`,
    images: [
      {
        id: 'crypto-comic-1',
        src: `/projects/crypto-comic/marketplace.png`,
        alt: `NFT Marketplace`,
      },
      {
        id: 'crypto-comic-2',
        src: `/projects/crypto-comic/smart_contracts.png`,
        alt: `Smart Contract Integration`,
      },
    ],
  },
  {
    id: 'mobile-app-backend',
    title: 'Cross-Platform Mobile Application Backend',
    periodFrom: 'Dec 2021',
    periodTo: 'May 2022',
    description: 
      'RESTful API backend supporting iOS/Android applications with push notification system.',
    role: 'Software Engineer Intern/Backend Developer.',
    responsibilities: [
      `Built RESTful API using Express and MongoDB for iOS/Android applications.`,
      `Implemented Firebase Cloud Messaging for comprehensive push notification systems.`,
      `Self-learned React/React Native to contribute to frontend development initiatives.`,
      `Developed scalable backend architecture supporting cross-platform mobile applications.`,
    ],
    skills: [
      // Skills.EXPRESS,
      // Skills.MONGODB,
      // Skills.FIREBASE_MESSAGING,
      Skills.REACT_JS,
      // Skills.REACT_NATIVE,
      Skills.JAVASCRIPT,
      // Skills.FIREBASE,
    ],
    logo: `/projects/mobile-backend/logo.png`,
    images: [
      {
        id: 'mobile-backend-1',
        src: `/projects/mobile-backend/api_architecture.png`,
        alt: `API Architecture`,
      },
    ],
  },
];
