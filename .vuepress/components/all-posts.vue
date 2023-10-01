// .vuepress/components/all-posts.vue
<template>
  <div class="menu-row">
    <hr />
    <div class="menu-column">
      <div class="menu-header">Danh sách bài viết</div>
      <p v-for="post in $site.pages.filter(p => p.path.includes('/posts'))">
        <router-link :to="post.path">{{ post.title }}</router-link>
      </p>
    </div>
    <div class="menu-column">
      <div class="menu-header">Hot</div>
      <p v-for="post in $site.pages.filter(p => p.path.includes('/posts/general'))">
        <router-link :to="post.path">{{ post.title }}</router-link>
      </p>
    </div>
    <div class="menu-column">
      <div class="menu-header">Tin tuyển dụng</div>
      <p v-for="post in $site.pages.filter(p => p.path.includes('/posts/recruitment'))">
        <router-link :to="post.path">{{ post.title }}</router-link>
      </p>
    </div>
  </div>
</template>