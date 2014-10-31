FROM python:2.7
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y nodejs-legacy npm
RUN npm install -g bower uglify-js less

WORKDIR /workdir
COPY requirements.txt /workdir/
RUN pip install -r requirements.txt

COPY . /workdir/
RUN python setup.py develop
RUN bower --allow-root install

CMD ["python", "offenerhaushalt/manage.py", "runserver", "--host", "0.0.0.0"]
EXPOSE 5000
