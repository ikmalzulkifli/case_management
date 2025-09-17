# Owlculus

<p align="center">
  <img src="https://i.imgur.com/Cuf4hMK.png" />
</p>

Owlculus is a comprehensive OSINT case management platform built for solo work or investigative teams. Manage cases,
collaborate, and run OSINT tools directly in your browser.

**100% free and open-source forever, no matter what.**

> **Active Development**: Note that Owlculus is under active development. Run `git pull` in the repo root regularly for
> updates. Never deploy the "
> dev" branch to production!

## Features

- **Case Management**: Create and track cases with customizable report numbering
- **Multi-User Collaboration**: Role-based access controls (Admin, Investigator, Analyst)
- **Entity System**: Track individual people, companies, domains, IP addresses, and vehicles each with dedicated
  notetaking
- **Evidence Management**: Organized file storage with folder templates and integration with the browser extension
- **OSINT Plugin Ecosystem**: Run popular open-source and custom OSINT tools right in your browser
- **Cross-Case Correlation**: Discover connections between investigations with the Correlation Scan plugin
- **Automated Hunts**: Multi-step OSINT workflows for comprehensive research (WIP)
- **Browser Extension**: Capture web pages as HTML or screenshots as you investigate and save directly to case evidence
- **RESTful API**: Complete API backend for easy automation and integrations

## Documentation
The information you need to get started is hosted right here on GitHub in the [Wiki](https://github.com/be0vlk/owlculus/wiki) but if you need any additional guidance, please feel free to open a [Discussion](https://github.com/be0vlk/owlculus/discussions)

## Contributing
GitHub Issues and Pull Requests always welcome! Oh and make sure to at least read the CONTRIBUTING.md readme first for some basic guidelines.

If you find the app useful and feel so inclined, please consider fueling my future coding sessions with a donation
below. Anything and everything helps and is greatly appreciated :)

<a href="https://www.buymeacoffee.com/be0vlk" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

Using Docker (Recommended)

  Start all services:
  cd "C:\Users\User\OneDrive\Documents\GitHub\case_management"      
  docker compose up -d

  Check service status:
  docker compose ps

  View logs:
  docker compose logs

  Stop services:
  docker compose down

Frontend Only:

  cd "C:\Users\User\OneDrive\Documents\GitHub\case_management\fr    
  ontend"
  npm install
  npm run dev

  Backend Only:

  cd "C:\Users\User\OneDrive\Documents\GitHub\case_management"      
  docker compose exec backend python main.py

  Check Status

  To verify everything is running:
  docker compose ps

  Stop the Application

  When you're done:
  docker compose down

  Troubleshooting

  If you encounter issues:
  1. Make sure Docker Desktop is running
  2. Check port availability (3000, 8000)
  3. View logs: docker compose logs
  4. Restart services: docker compose restart

  The Docker approach will automatically set up the database,       
  backend, and frontend services with all dependencies
  installed.