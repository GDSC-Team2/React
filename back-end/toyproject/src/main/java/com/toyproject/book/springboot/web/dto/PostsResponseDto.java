package com.toyproject.book.springboot.web.dto;

import com.toyproject.book.springboot.domain.posts.Posts;
import lombok.Getter;

// 조회 기능을 위한 dto로 데이터 교환, 변경을 위한 영역
@Getter
public class PostsResponseDto {

    private Long id;
    private String title;
    private String description;
    private String link;
    private String contact;
    private String price;
    private String date;
    private String author;

    public PostsResponseDto(Posts entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.description = entity.getDescription();
        this.link = entity.getLink();
        this.contact = entity.getContact();
        this.date = entity.getDate();
        this.price = entity.getPrice();
        this.author = entity.getAuthor();
    }
}