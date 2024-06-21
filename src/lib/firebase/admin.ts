import type { ServiceAccount } from "firebase-admin"
import * as admin from "firebase-admin"

const cert: ServiceAccount = {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    projectId: process.env.FIREBASE_PROJECT_ID
}

export const firebaseAdmin =
    admin.apps[0] ??
    admin.initializeApp({
        credential: admin.credential.cert(cert)
    })


export const db = admin.firestore()
