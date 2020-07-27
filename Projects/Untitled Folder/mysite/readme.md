
# My Website
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/getting_started.png)
Hi guys,welcome to this tutorial series on django.in this mini series ill be creating my very own fully function website using django.For this project is a simple website where our landing page is what you see on your screen. 
![](https://devngecu.herokuapp.com/media/photos/2020/06/09/mywebsite.png)
## 1.Getting Started
Before we explore more of it,the website is fully responsive to any website.
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/responsive.png)
So,at the top is a nav bar,atmost right is the current date,left of it is home button to return us to this page for easy navigation.at far left is my name and next to it is a typewitter animation “code like a boss,python,javascript”
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/navbar.png)
On our main section are at the sides are my social media links: on the left github,linkedin,twitter and on the right facebook,instagram and email
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/social1.png)
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/social2.png)
On the middle,starting at the top we have my photo and next to it is a brief explainer having a youtube subscribe button and githup profile page.Below it are the current statistics ie Confirmed Cases,Recoveries and Deaths of the Covid 19.
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/explainer.png)
Below is another row having tutorial and archives columns.On clicking the two you will encounter a popup of the complete tutorial or archive respectively.So ill start with the archives.As per the time or recording.These are the current projects I have completed and are live and running.If I click for example covid 19.it should redirect me to the project website
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/tutarchive.png)
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/archives.png)
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/tut.png)
For the tutorials,it will redirect you to the written form of the app being created.Let's choose for example this dictionary app I did a while back.It will be divided into small bits for easy understanding.Each bit will have a section art photo to make the tutorial more interesting and live.Inside also we will have follow up photos and code snippets.
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/bit1.png)
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/bit2.png)
At the bottom we have a navigator to continue or go back to the next,presiding,first or last tutorial bit.Below that we have three buttons.
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/paginator.png)
The first being comment button.On clicking it it toggles the comment section which is a row having to columns of fill out form and the coments of the tutorial.So let me illustrate this:
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/comments.png)
Dictionary app is the the tutorial I am coomenting on.Name is Dev Ngecu,email devngecu@gmail.com,body is this is cool.submit
And you wll notice a green pop up on the right.if we look at the comments,you notice it added the comment having an anonymous imge,name of commentor in bold,date of comment,actual comment.We can also like and dislike a comment.On clicking either you will notice a pop up at the right.Also you cannot like or dislike the comment again,unless you refresh the page.I know some people will say this is a drawback but I found it quite cool to include it in this app.
![](https://devngecu.herokuapp.com/media/photos/2020/06/19/comment_complete.png)
Unfortunately I also noticed a drawback with this comment section where the page refreshes on submiting a comment.We can solve that using api requests using django rest framework and ajax.i’ll cover that much later,but for now we will leave it at that.
Our middle button is a link that will redirect us to the github rpo of the tutorial.Our last button is also a link that will redirect to the youtube video form othe tutorial.Yeah,thats all we will cover


