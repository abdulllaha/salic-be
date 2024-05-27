import { Router } from 'express';
import { User, ResponseWrapper } from './interfaces';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/user', (req, res) => {
    const user: ResponseWrapper<User[]> = {
        value: [
            {
                Id: 1,
                IsHiddenInUI: false,
                LoginName: 'John Doe',
                Title: 'SVP - Information Technology',
                PrincipalType: 1,
                Email: 'john@example.com',
                Expiration: '2024-12-31',
                IsEmailAuthenticationGuestUser: false,
                IsShareByEmailGuestUser: false,
                IsSiteAdmin: true,
                UserId: {
                    NameId: 'johnDoeId',
                    NameIdIssuer: 'issuer1',
                },
                UserPrincipalName: 'johnDoe@example.com',
            },
            {
                Id: 2,
                IsHiddenInUI: true,
                LoginName: 'Jane Smith',
                Title: 'Director of Human Resources',
                PrincipalType: 2,
                Email: 'jane@example.com',
                Expiration: '2024-11-30',
                IsEmailAuthenticationGuestUser: true,
                IsShareByEmailGuestUser: true,
                IsSiteAdmin: false,
                UserId: {
                    NameId: 'janeSmithId',
                    NameIdIssuer: 'issuer2',
                },
                UserPrincipalName: 'janeSmith@example.com',
            },
            {
                Id: 3,
                IsHiddenInUI: false,
                LoginName: 'Bob Brown',
                Title: 'Chief Financial Officer',
                PrincipalType: 3,
                Email: 'bob@example.com',
                Expiration: '2023-10-15',
                IsEmailAuthenticationGuestUser: false,
                IsShareByEmailGuestUser: true,
                IsSiteAdmin: true,
                UserId: {
                    NameId: 'bobBrownId',
                    NameIdIssuer: 'issuer3',
                },
                UserPrincipalName: 'bobBrown@example.com',
            },
            {
                Id: 4,
                IsHiddenInUI: true,
                LoginName: 'Alice Johnson',
                Title: 'Marketing Manager',
                PrincipalType: 4,
                Email: 'alice@example.com',
                Expiration: '2025-01-20',
                IsEmailAuthenticationGuestUser: true,
                IsShareByEmailGuestUser: false,
                IsSiteAdmin: false,
                UserId: {
                    NameId: 'aliceJohnsonId',
                    NameIdIssuer: 'issuer4',
                },
                UserPrincipalName: 'aliceJohnson@example.com',
            },
        ],
    };
    setTimeout(() => {
        res.status(200);
        res.json(user);
    }, 700);
});

router.get('/photo', (req, res) => {
    const email = req.query.email;
    if (!email) {
        return res
            .status(400)
            .json({ error: 'Email query parameter is required' });
    }
    const photoPath = path.join(__dirname, '../public/photo.jpg');
    fs.readFile(photoPath, (err, data) => {
        if (err) {
            return res
                .status(500)
                .json({ error: 'Error reading the photo file' });
        }
        const base64Photo = data.toString('base64');
        setTimeout(() => {
            res.status(200);
            res.json(base64Photo);
        }, 700);
    });
});

export default router;
