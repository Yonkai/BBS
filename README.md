# BBS
BBS - "Bulletin Board System" 

This application is a simple anonymous text board, it is still in development. You can find a live production version 
[here.](https://www.daydreaming.me)

# About
The website is made of "boards", "threads", and "replies". A board is the main hub for discussion about a topic, to which users can make threads of a subject related to that topic, to which users can reply to. 

Each time a thread is created it is put on the top of a queue, when another user or the original poster replies to that thread, it is "bumped" to the top of the queue, therefore, more active threads stay on the queue for longer. Threads are dequeued when they fall below the 100 top most active threads.

# Technologies Used
 * NextJS
 * MySQL
 * Nginx
 * ExpressJS
 * reCAPTCHA
 * react-draggable
 * CSS Grid
 * PM2
