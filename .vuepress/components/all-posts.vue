// .vuepress/components/all-posts.vue
<template>
  <div class="menu-row">
    <hr />
    <div class="menu-column">
      <div class="menu-header">Danh sách bài viết</div>
      <p>
        <a href="https://hatide.github.io/danh-muc/systemc.html">SystemC W.I.P</a>
      </p>
      <p>
        <a href="https://hatide.github.io/danh-muc/uvm.html">UVM T.B.D </a>
      </p>
      <p>
        <a href="https://hatide.github.io/danh-muc/tlm2.html">TLM2 T.B.D </a>
      </p>
      <p>
        <a href="https://hatide.github.io/danh-muc/dpi-c.html">DPI-C W.I.P </a>
      </p>
      <p>
        <a href="https://hatide.github.io/danh-muc/system_rdl.html">System_RDL W.I.P</a>
      </p>
      <p>
        <a href="https://hatide.github.io/danh-muc/general.html">Tổng hợp W.I.P</a>
      </p>
      <p>
        <a href="https://hatide.github.io/about/">Liên hệ - Donate</a>
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