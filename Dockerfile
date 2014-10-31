FROM python:2.7
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y nodejs-legacy npm
RUN npm install -g bower

RUN mkdir /workdir
WORKDIR /workdir

COPY requirements.txt /workdir/
RUN pip install -r requirements.txt

COPY . /workdir/
RUN bower --allow-root install
RUN python setup.py develop

RUN npm install -g bower uglify-js less

CMD ["python", "offenerhaushalt/manage.py", "runserver", "--host", "0.0.0.0"]
EXPOSE 5000
