# Collaborative Notes App

Welcome to the Collaborative Notes App! This app allows users to create, update, share, and collaborate on notes and folders. It's built using modern technologies like **Next.js**, **Neon (PostgreSQL)**, **Drizzle ORM**, and **Kinde Auth** for authentication and role management. Kafka integration enables real-time updates and event-driven processes for improved scalability and performance.

## Features

- **User Authentication**: Login and signup with Kinde Auth, managing roles and permissions.
- **Session Management**: Session validation and reauthentication support.
- **Notes and Folders**: Create, update, delete, and organize notes and folders.
- **Real-Time Collaboration**: Share notes and folders with specific users and subscribe to real-time updates using WebSockets.
- **Event-Driven**: Kafka is used to manage events such as note creation, updates, and sharing, providing a scalable, decoupled architecture.

## Tech Stack

- **Frontend**:

  - **Next.js**: A React framework for building modern, fast, and scalable web applications.
  - **ShadCN UI**: A React UI library for building sleek and responsive interfaces.

- **Backend**:

  - **Node.js**: JavaScript runtime used for the backend logic and API server.
  - **Neon (PostgreSQL)**: Cloud-native PostgreSQL database for storing user data and notes.
  - **Drizzle ORM**: TypeScript-first ORM for interacting with PostgreSQL, providing a robust and intuitive interface for querying the database.

- **Authentication & Authorization**:
  - **Kinde Auth**: Secure authentication and role-based access management. Kinde Auth handles login, signup, and session management, along with API-driven user role validation.
- **Event-Driven Architecture**:

  - **Kafka**: Used for producing and consuming events for operations like note creation, updates, deletions, and real-time updates. Kafka decouples processes for better scalability and fault tolerance.

- **Real-Time Communication**:
  - **WebSockets**: Used for real-time notifications and updates, keeping users synchronized across the application.

## Installation

### Prerequisites

- **Node.js** (>=14.x)
- **Yarn** or **npm**
- **PostgreSQL** (via Neon or locally)
- **Kafka** (optional, for event-driven architecture)
- **Kinde Auth** account (free plan available)

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/collaborative-notes-app.git
   cd collaborative-notes-app
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

   or

   ```bash
   npm install
   ```

   or

   ```bash
   bun install
   ```

   or

   ```bash
   pnpm install
   ```

3. **Configure environment variables**  
   Create a `.env.local` file in the root directory with the following configuration:

4. **Run the application**

```bash
 yarn dev
```

or

```bash
 npm run dev
```

or

```bash
 bun run dev
```

or

```bash
 pnpm run dev
```

5. Visit the app at `http://localhost:3000` to start using it.

## Usage

- **Login/Signup**: Use Kinde Auth to log in or sign up. Roles and permissions are managed through the Kinde Auth dashboard.
- **Create Notes/Folders**: After logging in, users can create, update, delete, and share notes and folders.
- **Real-Time Updates**: Subscribe to WebSocket events to get real-time updates when notes or folders are created, updated, or deleted.

## Kafka Integration

Kafka is used to produce and consume events for key actions like creating a note, updating user data, and more. These events help decouple the core functionality from other processes like logging, real-time updates, and background tasks.

### Key Events

- `user_logged_in`: Sent when a user logs in.
- `user_data_updated`: Sent when user data is updated.
- `note_created`: Sent when a note or folder is created.
- `note_updated`: Sent when a note or folder is updated.
- `note_deleted`: Sent when a note or folder is deleted.
- `note_shared`: Sent when a note or folder is shared.
- `note_locked`: Sent when a note is locked for editing.
- `note_operation_failed`: Sent when an operation fails.

Kafka consumers listen to these events and can trigger background tasks like sending notifications or logging activities.

## Contributing

We welcome contributions to improve the Collaborative Notes App! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and add tests.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-xyz`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Next.js** for building the React framework.
- **Neon (PostgreSQL)** for the cloud-native database.
- **Kafka** for event-driven architecture.
- **Kinde Auth** for authentication and role management.
