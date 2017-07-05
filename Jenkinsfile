pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('test') {
      steps {
        sh 'npm run test'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}