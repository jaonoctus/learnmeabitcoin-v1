---
title: How Does Bitcoin Work?
position: 1
---

Bitcoin is an **electronic payment system created in 2009**. It allows you to send money to anyone in the world, without the need for a central authority to issue accounts or process payments.

It was created as a solution to the modern financial system, whereby a small number of large banks control the issuance of accounts and the processing of transactions. This centralizes the control of money, and forces users to trust the banks to act responsibly.

> "Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve." - [Satoshi Nakamoto](https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/1/)

The abuse of this trust and the resulting financial crisis of 2007 inspired the development of Bitcoin, which runs as a payment system without a central point of control. Bitcoin was designed anonymously under the pseudonym Satoshi Nakamoto, and was [released in January 2009](https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html).

The following is a simple explanation of how it works.

## What is Bitcoin?

Bitcoin is just a **computer program**. You can download it and run it on your computer.

![image](/content/home/1_1_program.png)

Go on, [try it](https://bitcoin.org/en/download).

When you run the program, it will connect to other computers who are also running this program, and they will start sharing a file with you. This file is called the [blockchain](TODO), and it is basically a big list of [transactions](TODO).

![image](/content/home/1_2_network.png)

When a new transaction enters the network, it gets relayed from computer to computer until everyone has a copy of the transaction. At roughly 10 minute intervals, a random computer ([node](TODO)) on the network will add the latest transactions they have received on to the blockchain, and share the updates with everyone else on the network.

![image](/content/home/1_3_network_transactions.png)

As a result, the Bitcoin program creates a large [network](TODO) of computers that communicate with each other to **share a file and update it with new transactions**.
