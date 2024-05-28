import { Router } from 'express';
import { User, ResponseWrapper } from './interfaces';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/user', (req, res) => {
    const user: ResponseWrapper<User[]> = {
        value:[
          {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            title: "Manager",
            otherId: {
              id: "A123",
              issuerId: "Issuer1"
            },
            partName: "Part A"
          },
          {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            title: "Developer",
            otherId: {
              id: "B456",
              issuerId: "Issuer2"
            },
            partName: "Part B"
          },
          {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            title: "Designer",
            otherId: {
              id: "C789",
              issuerId: "Issuer3"
            },
            partName: "Part C"
          },
          {
            id: 4,
            name: "Bob Brown",
            email: "bob.brown@example.com",
            title: "Analyst",
            otherId: {
              id: "D012",
              issuerId: "Issuer4"
            },
            partName: "Part D"
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
