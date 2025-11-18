// components/VideoBackground.js
const VideoBackground = ({ children }) => {
  return (
    <div className="video-background-container">
      {/* Atributos Essenciais:
        - autoPlay: Para iniciar a reprodução automaticamente.
        - loop: Para que o vídeo se repita continuamente.
        - muted: **Crucial**. A reprodução automática (autoPlay) só funciona se o vídeo estiver silenciado.
        - playsInline: Recomendado para compatibilidade em dispositivos móveis.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        {/* Referencie o vídeo usando o caminho a partir da pasta 'public' */}
        <source src="/stars-video.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      {/* O 'children' é onde o restante do conteúdo do seu site ficará */}
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;