FROM nikolaik/python-nodejs:python3.10-nodejs16 as movieme-app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm update -g
RUN npm install

RUN mkdir ./api
COPY api/requirements.txt api/api.py api/.flaskenv ./api
RUN pip install -r ./api/requirements.txt

EXPOSE 3000

COPY run.sh ./
RUN chmod +x run.sh

CMD ["./run.sh"]
