# Choose the Image which has Node installed already
FROM node:alpine
# COPY all the files from Current Directory into the Container
COPY ./ ./
# Install the Project Dependencies
RUN npm install
# Tell that this image is going to Open a Port 
EXPOSE 8080
# Default Command to launch the Application
CMD ["npm", "start"]