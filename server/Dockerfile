# server/Dockerfile
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /usr/src/app

# Install only prod deps deterministically
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the server
COPY . .

# Run as non-root; make sure permissions are correct
RUN chown -R node:node /usr/src/app
USER node

# Optional: helps humans; Render doesn’t require EXPOSE
EXPOSE 3000

# If your package.json has "start": "node src/index.js" (or similar), keep:
CMD ["npm", "start"]
