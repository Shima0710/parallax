window.onload = function() {
  // ウィンドウのスクロールイベントを監視するリスナーを追加
  window.addEventListener('scroll', function(e) {
    
    // スクロール量を取得
    let s = this.scrollY;
    // ウィンドウの幅を取得
    let w = this.outerWidth;
    // parallaxクラスの要素の幅を取得
    let h = document.getElementsByClassName('paralax')[0].clientWidth;
    // containerクラスの要素の幅を取得
    let h_b = document.getElementsByClassName('container')[0].clientWidth;
    // スクロール割合を計算
    let p = s / h * 100;
    let p_b = s / h_b * 100;
    // 不透明度を計算
    let opas = 1 - 1 / 100 * p_b;
    // p-item4の拡大率を計算し、スタイルを設定
    let z_1 = 1 + (w / 10000 * p_b);
    document.getElementsByClassName('p-item4')[0].style = `transform: scale(${z_1});opacity: ${opas}`;
    // p-item1の拡大率を計算し、スタイルを設定
    let z_2 = 1 + (w / 5000000 * p);
    document.getElementsByClassName('p-item1')[0].style = `transform: scale(${z_2})`;
    // p-item2の横方向の移動と拡大率を計算し、スタイルを設定
    let hr = w / 2000 * p_b;
    let z_3 = 1 + (w * 0.000005 * p_b);
    document.getElementsByClassName('p-item2')[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
    // p-item3をスクロールするたびに右方向に移動させる
    let hr_2 = s * 0.5; // スクロール量に比例して右方向に移動
    let z_4 = 1 + (w * 0.00001 * p_b);
    document.getElementsByClassName('p-item3')[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
    // p-item30をスクロールするたびに左方向に移動させる
    let hr_3 = -s * 0.5; // スクロール量に比例して左方向に移動
    document.getElementsByClassName('p-item30')[0].style = `transform: translate3d(${hr_3}px,0,0)`;
  });
}
