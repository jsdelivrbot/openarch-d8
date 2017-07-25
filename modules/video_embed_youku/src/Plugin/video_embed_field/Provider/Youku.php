<?php

/**
 * @file
 * Contains \Drupal\video_embed_youku\Plugin\video_embed_field\Provider\Youku.
 */

namespace Drupal\video_embed_youku\Plugin\video_embed_field\Provider;

use Drupal\video_embed_field\ProviderPluginBase;

/**
 * @VideoEmbedProvider(
 *   id = "youku",
 *   title = @Translation("Youku")
 * )
 */
class Youku extends ProviderPluginBase {

  /**
   * {@inheritdoc}
   */
  public function renderEmbedCode($width, $height, $autoplay) {
    return [
      '#type' => 'html_tag',
      '#tag' => 'iframe',
      // '#tag' => 'embed',
      // '#query' => [
      //   'client_id' => '17ef1892ecbd1f6e',
      // ],
      '#attributes' => [
        // 'client_id' => '17ef1892ecbd1f6e',
        'width' => $width,
        'height' => $height,
        'frameborder' => '0',
        'allowfullscreen' => 'allowfullscreen',
        //'src' => sprintf('http://player.youku.com/embed/%s&autoplay=%d', $this->getVideoId(), $autoplay),
        //'src' => sprintf('http://player.youku.com/embed/%s&autoplay=%d/partnerid/17ef1892ecbd1f6e', $this->getVideoId(), $autoplay),
        'src' => sprintf('http://player.youku.com/embed/%s?client_id=17ef1892ecbd1f6e', $this->getVideoId()),
        //http://player.youku.com/player.php/sid/XMjc4NDkyNDE4NA==/isAutoPlay/false/newPlayer/true/partnerid/17ef1892ecbd1f6e/v.swf
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  // public function getRemoteThumbnailUrl() {
  //   $video_data = json_decode(file_get_contents('https://openapi.youku.com/v2/videos/show_basic.json?client_id=8d025b9c897b22a8&video_id=s%', $this->getVideoId()));
  //   return $video_data->thumbnail;
  // }
  public function getRemoteThumbnailUrl() {
    $video_data = json_decode(file_get_contents('https://openapi.youku.com/v2/videos/show_basic.json?client_id=8d025b9c897b22a8&video_id=s%', $this->getVideoId()));
    return $video_data->thumbnail;
  }

  /**
   * {@inheritdoc}
   */
  public static function getIdFromInput($input) {
    $id = FALSE;
    // Parse_url is an easy way to break a url into its components.
    $parsed = parse_url($input);
    $path = $parsed['path'];
    $parts = explode('/', $path);
    foreach ($parts as $part) {
      if (strstr($part, 'id_')) {
        $id = str_replace('id_', '', $part);
        $id = str_replace('.html', '', $id);
        return $id;
      }
    }
  }

}
