 _*Assalamu 'alaikum Wr. Wb*_


### CodeSyariah Blog
*    *    *  

   Dibangun untuk keperluan blogging sebagai catatan pribadi  
dalam rangka merekam jejak jejak informasi digital yang mudah2an saya usahakan  
berdasarkan dari sumber yang kredibel. 
dan berharap bisa berguna untuk menambah khazanah informasi bagi publik yang lebih luas lagi kedepannya.
  
Dokumentasi jekyll :  

[![Jekyll Docs](https://jekyllrb.com/img/logo-2x.png)](https://jekyllrb.com/docs/)  

  > Saya menggunakan platform statis site dari ruby yaitu jekyll  
dalam membangun blog ini, barangkali semua progress yang sekarang ini secara garis besar belum rampung 100%.  
jika kalian tertarik untuk mengembangkan blog ini, karena masih banyak fitur yang ingin saya  
tambahkan sebenarnya, karena keterbatasan waktu dan kemampuan, maka saya  persilahkan di fork  
jika ada yang ingin mengembangkan fitur fiturnya.  
dan saya persilahkan untuk mengembangkan, dengan bebas, dengan bahasan konten apapun yang berisi  
informasi ilmiah dari anda dan kalian semua,  
dan dikhususkan untuk keperluan edukasi ilmiah lainnya.

#### proses installasi blog jekyll
  
```
sudo su 
apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
jekyll -v
bundler --version or -v
bundle init
//Now edit the Gemfileand add jekyll as a dependency:
gem "jekyll"
```

#### proses membangun blog
```
jekyll new namablogkamu
jekyll serve
/*
buat file dengan nama : 
‘2019-07-09-belajar-jekyll.markdown’.
*/
//format tanggal => YYYY-MM-DD
//format penulisan file harus markdown
//markdown ini nantinya akan di konversi ke html statis
//bisa cari dokumentasi markdown di internet(banyak)
//intinya markdown membuat penulisan jadi lebih singkat, ringkas dan ringan.
```

**_example :_**  
```
---
layout: post
title: "My New Post"
date: "2019-07-09 07:09:10 +0700"
categories: jekyll update
---

Hello World, My first Post.
```  
  
| Description | Link        |
| ----------- | ----------- |
| My Profile  | [![Puji Ermanto Facebook](http://icons.iconarchive.com/icons/yootheme/social-bookmark/48/social-facebook-box-blue-icon.png)](https://www.facebook.com/strawberrywine)|
| Chat Me     | [![Puji Ermanto Whatsapp](http://icons.iconarchive.com/icons/dtafalonso/android-l/48/WhatsApp-icon.png)](https://api.whatsapp.com/send?phone=6288222668778&text=Halo%20Puji%20Ermanto%20saya%20ingin%20bergabung%2c%20%20dengan%20codesyariah&source=&data=)|
|             |             |  
  
  
  

> *_Jangan lupa Tauhid_*  
  
**Wassalamu 'alaikum Wr. Wb**, 

