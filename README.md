# Travel Itinerary Restoration

This project provides a solution for restoring travel itineraries based on a corrupted database containing customer's trips. The system can recover tickets linked to specific users and reconstruct the original trip for those users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Introduction

One travel agency faced a problem with a corrupted database, containing customer's trips. The IT department was able to recover tickets linked to specific users. Unfortunately, tickets contain only source and destination cities without any other information. This project provides a TypeScript application to help travel agencies restore the original trip for specific users.

## Features

- **Restore Itinerary:** Given an array of tickets, the application can reconstruct the original trip itinerary for specific users.

## Installation

1. Clone the repository:

```bash
  git clone https://github.com/JahanzaibSuleman/restore-trips.git
  cd your-repo
```

2. Install dependencies:

```bash
  npm install
```

## Usage

The application exposes a main entry point in src/index.ts where you can customize the input data and see the restored itineraries.

```bash
  npm start
```

Ensure that your TypeScript and Node.js environments are properly set up.

## Testing

The project uses Jest for testing. Run the following command to execute the tests:

```bash
npm test
```
