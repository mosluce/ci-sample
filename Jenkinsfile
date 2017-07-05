pipeline {
  agent {
    docker {
      image 'node'
      args '-u root'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''echo 'Building...'
npm install'''
      }
    }
    stage('Test') {
      steps {
        sh '''echo 'Testing...'
npm test'''
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}