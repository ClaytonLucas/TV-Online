<template>
    <video ref="video" width="100%" height="640" controls muted="muted"></video>
</template>
  
<script>
import Hls from 'hls.js';

export default {
    props: {
        src: {
            type: String,
            required: true
        }
    },
    mounted() {
        let hls = new Hls();
        let stream = this.src;
        let video = this.$refs["video"];
        hls.loadSource(stream);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
        
        });
    },
};
</script>