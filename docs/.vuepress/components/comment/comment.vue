<template>
  <div class="gitalk--container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {};
  },
  mounted() {
    let body = document.querySelector('.gitalk--container');
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    body.appendChild(linkGitalk);
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    body.appendChild(script);
    script.onload = () => {
      const commentConfig = {
        clientID: '1424e4781391f5d0089d',
        clientSecret: '791c7f5fdf59a831875049ec8eae9ecb9607868c',
        repo: 'No.wan-doc',
        owner: 'chirilingfeng',
        // 这里接受一个数组，可以添加多个管理员
        admin: ['chirilingfeng'],
        id: location.pathname,
        distractionFreeMode: false,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    };
  },
};
</script>

