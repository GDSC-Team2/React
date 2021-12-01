package com.toyproject.book.springboot.domain.posts;

import com.toyproject.book.springboot.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

// 실제 DB의 테이블과 매칭될 Entity 영역
@Getter  // 롬복 어노테이션 - 클래스 내의 모든 필드의 Getter 메소드를 자동생성
@NoArgsConstructor  // 롬복 어노테이션 - 기본 생성자 자동 추가, public Posts() {}와 같은 효과
@Entity  // JPA 어노테이션 : 테이블과 링크될 클래스
public class Posts extends BaseTimeEntity {

    // 테이블 기본키 (PK)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 테이블 칼럼 - 제목
    @Column(length = 500, nullable = false)
    private String title;

    // 테이블 칼럼 - 설명
    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    // 테이블 칼럼 - 상품 상세 링크
    @Column(length = 500, nullable = false)
    private String link;

    // 테이블 칼럼 - 오픈 채팅방
    @Column(length = 500, nullable = false)
    private String contact;

    // 테이블 칼럼 - 가격
    @Column(length = 100, nullable = false)
    private String price;

    // 테이블 칼럼 - 공구 기간
    @Column(length = 100, nullable = false)
    private String date;

    // 테이블 칼럼 - 작성자
    private String author;

    // 필드에 값을 채우기 위한 빌더 클래스 (생성자 대신 사용)
    @Builder
    public Posts(String title, String description, String link, String contact, String price, String date, String author) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.contact = contact;
        this.date = date;
        this.price = price;
        this.author = author;
    }

    // 게시글 수정하는 함수
    public void update(String title, String description, String link, String contact, String price, String date){
        this.title = title;
        this.description = description;
        this.link = link;
        this.contact = contact;
        this.date = date;
        this.price = price;
    }
}
