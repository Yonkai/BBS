# BBS
BBS - "Bulletin Board System" 

This application is a simple anonymous text board, it is still in development. You can find a live production version 
[here.](https://www.daydreaming.me)

# About
The website is made of "boards", "threads", and "replies". A board is the main hub for discussion about a topic, to which users can make threads of a subject related to that topic, to which users can reply to. 

Each time a thread is created it is put on the top of a queue, when another user or the original poster replies to that thread, it is "bumped" to the top of the queue, therefore, more active threads stay on the queue for longer. Threads are dequeued when they fall below the 100 top most active threads.

# Features
* Post threads anonymously or named
* Reply anonymously or named
* Individual boards are self-sorting based on activity
* Website is protected by reCAPTCHA and nginx rate limtiing to prevent spam
* Uses RESTful API implemented with ExpressJS and MySQL
* Responsive Design with CSS Grid

# Technologies Used
 * [NextJS](https://nextjs.org/docs)
 * [MySQL](https://www.mysql.com/)
 * [Nginx](http://nginx.org/)
 * [ExpressJS](https://expressjs.com/)
 * [reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html)
 * [react-draggable](https://www.npmjs.com/package/react-draggable)
 * [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
 * [PM2](http://pm2.keymetrics.io/)
