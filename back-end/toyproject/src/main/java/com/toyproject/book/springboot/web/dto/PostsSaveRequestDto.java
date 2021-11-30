package com.toyproject.book.springboot.web.dto;

import com.toyproject.book.springboot.domain.posts.Posts;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 등록 기능을 위한 dto로 데이터 교환, 변경을 위한 영역 - Request 데이터를 받을 Dto
@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {
    private String title;
    private String description;
    private String link;
    private String contact;
    private String price;
    private String date;
    private String author;

    @Builder
    public PostsSaveRequestDto(String title, String description, String link, String contact, String price, String date, String author) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.contact = contact;
        this.date = date;
        this.price = price;
        this.author = author;
    }

    public Posts toEntity() {
        return Posts.builder()
                .title(title)
                .description(description)
                .link(link)
                .contact(contact)
                .date(date)
                .price(price)
                .author("wn8925@sookmyung.ac.kr")
                .build();
    }
}