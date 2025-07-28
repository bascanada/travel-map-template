FROM ghcr.io/bascanada/travel-site-builder:latest 

COPY travel-site.config.js /app/travel-site.config.js
COPY data /app/static/data

CMD ["npm", "run", "build"]
