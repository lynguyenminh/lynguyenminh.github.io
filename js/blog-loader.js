async function loadBlogPosts() {
    try {
        console.log('Starting to load blog posts...');
        const response = await fetch('/assets/blog-config.json');
        const data = await response.json();
        console.log('Loaded data:', data);
        
        // Tính tổng số bài viết
        const totalPosts = [
            data.features_lv1, 
            ...data.features_lv2,
            ...data.latest_lv3
        ].length;
        
        console.log('Total posts:', totalPosts);

        // Cập nhật số bài viết trong post-read-time
        const readTimeElements = document.querySelectorAll('.post-read-time');
        console.log('Found elements:', readTimeElements.length);
        
        readTimeElements.forEach(element => {
            console.log('Current element text:', element.textContent);
            element.textContent = `${totalPosts} blog posts`;
        });
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

// Load blog posts khi trang web được tải
document.addEventListener('DOMContentLoaded', loadBlogPosts); 