# Admin Paneli Projesi

Bu proje, bir yönetim paneli oluşturmak için kullanılan bir React uygulamasını içerir. Aşağıda, projenin geliştirilmesi ve çalıştırılması için gerekli adımlar bulunmaktadır.

<img src="/src/images/gif.gif"/>

## Bağımlılıklar

Proje, aşağıdaki paketlere bağımlıdır:

- **@emotion/react**: ^11.8.1
- **@emotion/styled**: ^11.8.1
- **@mui/icons-material**: ^5.4.4
- **@mui/material**: ^5.4.4
- **@mui/x-data-grid**: ^5.5.1
- **@testing-library/jest-dom**: ^5.16.2
- **@testing-library/react**: ^12.1.3
- **@testing-library/user-event**: ^13.5.0
- **firebase**: ^9.23.0
- **i18next**: ^23.7.3
- **react**: ^17.0.2
- **react-circular-progressbar**: ^2.0.4
- **react-dom**: ^17.0.2
- **react-i18next**: ^13.4.0
- **react-router-dom**: ^6.18.0
- **react-scripts**: 5.0.0
- **recharts**: ^2.1.9
- **sass**: ^1.49.9
- **web-vitals**: ^2.1.4

## Kurulum

1. Proje dizinine gidin: `cd admin-panel-projesi`
2. Bağımlılıkları yükleyin: `npm install`

## Firebase Konfigürasyonu

Bu proje, Firebase veritabanını kullanmaktadır. Firebase projenizi oluşturun ve Firebase SDK'sını [Firebase belgelerine](https://firebase.google.com/docs/web/setup) göre projenize ekleyin. Ayrıca, proje kök dizininde `.env` dosyasını oluşturun ve Firebase yapılandırma bilgilerinizi içeren aşağıdaki değişkenleri ekleyin:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id

## Firebase Kurulumu ve Firestore

Firebase Console'da yeni bir proje oluşturun.
Firestore veritabanını etkinleştirin.
Oluşturduğunuz projeden aldığınız Firebase yapılandırma bilgilerini .env dosyasına ekleyin.
Uygulamayı Çalıştırma
Proje bağımlılıkları yüklendikten sonra, uygulamayı başlatmak için aşağıdaki komutu kullanın:

npm start


Bu komut, uygulamayı http://localhost:3000 adresinde çalıştıracaktır.

## Test

Testleri çalıştırmak için aşağıdaki komutu kullanabilirsiniz:

npm test

Bu komut, Jest test çerçevesini kullanarak testleri çalıştıracaktır.
