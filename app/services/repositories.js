import { fetchRepositories, fetchRepositoryById, fetchRepositoryProperty } from './helpers';

export const getRepositories = page =>
  new Promise((resolve, reject) => {
    fetchRepositories(page).then(response => {
      if (response.status !== 200) {
        response.json().then(json => {
          let message = json.message;
          if (Array.isArray(message)) {
            message = message.join();
          }
          reject(message);
        });
      } else {
        response.json().then(data => {
          resolve(data);
        });
      }
    });
  });

export const getRepositoryById = id =>
  new Promise((resolve, reject) => {
    fetchRepositoryById(id).then(response => {
      if (response.status !== 200) {
        response.json().then(json => {
          let message = json.message;
          if (Array.isArray(message)) {
            message = message.join();
          }
          reject(message);
        });
      } else {
        response.json().then(data => {
          resolve(data);
        });
      }
    });
  });

export const getRepositoryProperty = url =>
  new Promise((resolve, reject) => {
    fetchRepositoryProperty(url).then(response => {
      if (response.status !== 200) {
        response.json().then(json => {
          let message = json.message;
          if (Array.isArray(message)) {
            message = message.join();
          }
          reject(message);
        });
      } else {
        response.json().then(data => {
          resolve(data);
        });
      }
    });
  });
